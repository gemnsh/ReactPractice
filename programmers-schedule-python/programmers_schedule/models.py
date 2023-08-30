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
    
class AccumulateTime(models.Model):
    keyDate=models.CharField(max_length=10)
    dateSolvingTime=models.IntegerField()

class ColorTheme(models.Model):
    color_01=models.CharField(max_length=7)
    color_02=models.CharField(max_length=7)
    color_03=models.CharField(max_length=7)
    color_04=models.CharField(max_length=7)
    color_05=models.CharField(max_length=7)
    color_06=models.CharField(max_length=7)
    color_07=models.CharField(max_length=7)
    color_08=models.CharField(max_length=7)
    color_09=models.CharField(max_length=7)
    color_10=models.CharField(max_length=7)
    color_11=models.CharField(max_length=7)
    color_12=models.CharField(max_length=7)
    calender_01=models.CharField(max_length=7)
    calender_02=models.CharField(max_length=7)
    calender_03=models.CharField(max_length=7)
    calender_04=models.CharField(max_length=7)
    calender_05=models.CharField(max_length=7)
    calender_06=models.CharField(max_length=7)
    image_01=models.CharField(max_length=30)
    image_02=models.CharField(max_length=30)
    image_03=models.CharField(max_length=30)
    image_04=models.CharField(max_length=30)