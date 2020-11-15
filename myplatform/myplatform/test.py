from django.http import HttpResponse
import json

def index(request):
    data = {
        "a" : "1",
        "b" : "2",
    }
    success = "true"
    message = ""
    content = dict()
    content["success"] = success
    content["message"] = message
    content["data"] = data
    return HttpResponse(json.dumps(content), content_type="application/json")
