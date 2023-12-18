from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('info/<str:path_name>', views.prod_info, name='prod_info'),
    path('profile/', views.profile, name='profile'),
    path('contact/', views.contact, name='contact'),
    path('category/<str:category_name>', views.category, name='category'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
]


if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)