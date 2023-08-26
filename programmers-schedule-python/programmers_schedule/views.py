

from rest_framework import generics,serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import render,get_object_or_404
from programmers_schedule.models import Article

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