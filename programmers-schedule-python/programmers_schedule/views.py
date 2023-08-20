

from rest_framework import generics,serializers
from rest_framework.response import Response

from programmers_schedule.models import Article

class ArticleListSerializer(serializers.ModelSerializer):

    class Meta:
        model=Article
        fields=('id','articleProblemNumber','articleProblemLevel', 'articleProblemLanguage', 'articleTime', 'articleSolvingTime')

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer

    def list(self,request):
        queryset= self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset,many=True)

        page= self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page,many=True)
            return self.get_paginated_response(serializer.data)
        
        return Response(serializer.data)