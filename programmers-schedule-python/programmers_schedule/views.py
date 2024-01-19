

from rest_framework import generics,serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from django.shortcuts import render,get_object_or_404
from django.db.models import Count,Sum
from django.db.models.functions import TruncDate

from programmers_schedule.models import Article,AccumulateTime,ColorTheme

from datetime import datetime
from datetime import timedelta

class ArticleListSerializer(serializers.ModelSerializer):

    class Meta:
        model=Article
        fields=('id','articleProblemNumber','articleProblemLevel', 'articleProblemLanguage', 'articleProblemTrial', 'articleTime', 'articleSolvingTime')

class ArticleDetailListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Article
        fields='__all__'

class ArticlePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'

class TimeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=AccumulateTime
        fields='__all__'

class ColorThemeSerializer(serializers.ModelSerializer):

    class Meta:
        model=ColorTheme
        fields='__all__'

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer
    pagination_class = ArticlePagination

    def list(self,request):
            
            lang=request.GET.getlist('lang',None)
            level=request.GET.getlist('level',None)
            if lang:
                queryset=Article.objects.filter(articleProblemLanguage__in=lang).distinct()
                if level:
                    queryset=queryset.filter(articleProblemLevel__in=level).distinct()
            
            elif level:
                queryset=Article.objects.filter(articleProblemLevel__in=level).distinct()
            
            if not(lang or level):
                queryset=self.get_queryset()
            queryset=queryset.order_by('-id')
            serializer_class = self.get_serializer_class()
            serializer = serializer_class(queryset,many=True)
            page= self.paginate_queryset(queryset)
            if page is not None:
                serializer = self.get_serializer(page,many=True)
                return self.get_paginated_response(serializer.data)
            
            return Response(serializer.data)




@api_view(['GET',])
def getArticleDetail(request,pk):
    article = get_object_or_404(Article,pk=pk)
    serializer =ArticleDetailListSerializer(article)
    return Response(serializer.data)

@api_view(['GET',])
def getGraphData(request,pk):
    graphDataList= Article.objects.filter(articleTime__year=pk).annotate(day=TruncDate('articleTime')).values('day').annotate(value=Count('id')).values('day','value')
    return Response(graphDataList)

@api_view(['POST',])
def postArticle(request):
    serializer = ArticleDetailListSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({'data':'실패'})


@api_view(['POST',])
def getDateTime(request):

    accTime = AccumulateTime.objects.filter(keyDate=request.data.get('targetDate'))\
    .aggregate(sum=Sum('dateSolvingTime'))
    return Response(accTime)


@api_view(['POST',])
def postTime(request):
    time_started= request.data.get('startTimeData')
    solveTime=int(request.data.get('problemSolvingTime'))

    date_format1 = '%Y-%m-%d %H:%M:%S' #react에서 보내주는 서식에 따라 변경
    date_format2 = '%Y-%m-%d'
    date_started = datetime.strptime(time_started, date_format1)
    intTime=date_started.hour*3600+date_started.minute*60+date_started.second
    cnt=0
    if intTime+solveTime>86400:
        tmp_date= date_started + timedelta(days=1)
        tmp_time= intTime+solveTime-86400
        print('첫번째 시간',tmp_time)
        tmp_data={
        'keyDate':datetime.strftime(tmp_date, date_format2),
        'dateSolvingTime':tmp_time 
        }
        serializer = TimeSerializer(data=tmp_data)
        if serializer.is_valid():
            serializer.save()
            cnt+=1
        tmp_data={
        'keyDate':datetime.strftime(date_started, date_format2),
        'dateSolvingTime':solveTime-tmp_time 
        }
        serializer = TimeSerializer(data=tmp_data)
        if serializer.is_valid():
            serializer.save()
            cnt+=1
        if cnt==2:
            return Response({'data':'성공'})
        else:
            return Response({'data':'실패'})
    else:
        tmp_data={
        'keyDate':datetime.strftime(date_started, date_format2),
        'dateSolvingTime':solveTime 
        }
        serializer = TimeSerializer(data=tmp_data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':'성공'})
        else:
            return Response({'data':'실패'}) 
        
@api_view(['GET',])
def getColorTheme(request,pk):
    theme = get_object_or_404(ColorTheme,pk=pk)
    serializer =ColorThemeSerializer(theme)
    return Response(serializer.data)