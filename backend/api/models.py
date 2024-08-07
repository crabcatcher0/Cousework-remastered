from django.db import models
# Create your models here.



class Hostel(models.Model):
    
    TYPE = [
        ('BOYS', 'boys'),
        ('GIRLS', 'girls')
    ]
    LOCATION = [
        ('KATHMANDU', 'kathmandu'),
        ('BHAKTAPUR', 'bhaktapur'),
        ('LALITPUR', 'lalitpur'),
    ]
    
    hostel_name = models.CharField(max_length=20, null=False)
    hostel_type = models.CharField(max_length=5, choices=TYPE, null=False)
    main_location = models.CharField(max_length=15, choices=LOCATION, null=False)
    sec_location = models.CharField(max_length=15, null=False)
    hostel_description = models.TextField(max_length=1000, null=False)
    hostel_contact_number = models.IntegerField(max_length=13)
    created_at = models.DateTimeField(auto_now_add=True)