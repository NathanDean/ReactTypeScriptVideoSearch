# React Video Search App

This app uses the YouTube API to retrieve video matching the query entered by the user.

When the user submits a query, the list of videos returned are displayed in the VideoList component, while the first video in the list is automatically displayed in the VideoDetail component, where the user can play the selected video.

The app is built in React, and uses Axios to make requests to the YouTube API.  It also uses he to decode unicode in the video's title to a string.
