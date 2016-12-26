# Sports - Coaches Corners - Video selector

Video selector for the Sports exhibit at the Science Museum of Minnesota

## Saving content to a file

    mongoexport --port 3001 --db meteor --collection ExhibitComponents --pretty --jsonArray --out exhibitComponents.json
    mongoexport --port 3001 --db meteor --collection Videos --pretty --jsonArray --out videos.json
    
## Loading content from the file
Warning, this is destructive.

    meteor reset
    meteor

This will erase everything in your local database and update it with the json
files that are tracked in Git.
