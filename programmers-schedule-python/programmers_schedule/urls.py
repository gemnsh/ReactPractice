from django.urls import path
from django.contrib.auth import views as authViews

from .views import ArticleListView,getArticleDetail,getGraphData,postArticle,postTime,getDateTime,getColorTheme

urlpatterns = [
    path('list/',ArticleListView.as_view(), name='index'),
    path('article/<int:pk>',getArticleDetail,name='detail'),
    path('graph/<int:pk>',getGraphData,name='graph'),
    path('post/',postArticle,name='post'),
    path('postDate/',postTime,name='postTime'),
    path('returnTime/',getDateTime,name='returnTime'),
    path('color/<int:pk>',getColorTheme,name='theme'),
    path('login/',authViews.LoginView.as_view(),name='login')
    
]
