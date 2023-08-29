from django.urls import path
from .views import ArticleListView,getArticleDetail,getGraphData,postArticle,postTime,getDateTime
urlpatterns = [
    path('list/',ArticleListView.as_view(), name='index'),
    path('article/<int:pk>',getArticleDetail,name='detail'),
    path('graph/<int:pk>',getGraphData,name='graph'),
    path('post/',postArticle,name='post'),
    path('postDate/',postTime,name='postTime'),
    path('returnTime/',getDateTime,name='returnTime')
]
