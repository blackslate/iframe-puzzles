# Puzzles #

A React web app which showcases a number of puzzles. Each puzzle is developed as a standalone React app. The main app is designed to read in each standalone puzzle app as an iframe.

This means that new puzzles can be added at any time. A frontend-only version can read links to the standalone puzzles from a JSON file. If a backend were added, the frontend can ask the backend to generate links to all the standalone puzzles on the fly, so new puzzles could be added simply by uploading a new standalone to a given directory on the server.

