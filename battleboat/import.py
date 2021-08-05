import csv
movies={}
with open(path+'/desktop/events_to_delete.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        (Id,title)=[0:1]