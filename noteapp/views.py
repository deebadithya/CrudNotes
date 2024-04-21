from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import ModelSerializer

from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(
        notes, many=True
    )
    return Response(serializer.data)
@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(
        note, many=False
    )
    return Response(serializer.data)


@api_view(['PUT'])
def editNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(
        instance=note, data=data
    )
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def delNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Note was Deleted!")

@api_view(['POST'])
def createNote(request):
    content = request.data
    note = Note.objects.create(body=content['body'])
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
