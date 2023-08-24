from django.urls import path
from .views import ArticleListView,getArticleDetail

urlpatterns = [
    path('list/',ArticleListView.as_view(), name='index'),
    path('article/<int:pk>',getArticleDetail,name='detail')
]
