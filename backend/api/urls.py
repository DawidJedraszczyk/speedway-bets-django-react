from django.urls import path
from . import views

urlpatterns = [
    path("teams/", views.ListTeamView.as_view(), name="list-teams"),
    path('team/create/', views.CreateTeamView.as_view(), name="create-team"),
    path('team/delete/<int:pk>', views.DeleteTeamView.as_view(), name="delete-team"),
]