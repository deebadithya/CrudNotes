
from django.contrib import admin
from django.urls import path
from noteapp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/notes/", views.getNotes),
    path("api/notes/create/", views.createNote),
    path("api/notes/<str:pk>/delete/", views.delNote),
    path("api/notes/<str:pk>/edit/", views.editNote),
    path("api/notes/<str:pk>/", views.getNote),     
]
