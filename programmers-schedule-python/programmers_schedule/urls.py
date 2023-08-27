from django.urls import path
from .views import ArticleListView,getArticleDetail,getGraphData,postArticle
urlpatterns = [
    path('list/',ArticleListView.as_view(), name='index'),
    path('article/<int:pk>',getArticleDetail,name='detail'),
    path('graph/<int:pk>',getGraphData,name='graph'),
    path('post/',postArticle,name='post')
]
