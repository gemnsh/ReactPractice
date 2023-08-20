from django.db import models

# Create your models here.
class Article(models.Model):
    articleProblemNumber=models.IntegerField()
    articleProblemLevel=models.IntegerField()
    articleProblemLanguage=models.CharField(max_length=8)
    articleProblemTrial=models.IntegerField()
    articleTime=models.DateTimeField('date published')
    articleSolvingTime=models.IntegerField()
    articleNote=models.CharField(max_length=500)

    def __str__(self):
        return str(self.articleProblemNumber)+'번 / '+self.articleNote