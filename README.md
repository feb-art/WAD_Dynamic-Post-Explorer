# the reading room — Dynamic Post Explorer

# Project Description

The Reading Room is a minimalist reading website built using HTML, CSS, and JavaScript. It features a curated collection of five articles about personal growth, self-discovery, self-acceptance, and life reflections.

Users can click the Load Posts button to display the five article cards dynamically. Each card contains an article title, source, short description, and a link to the original article, where readers can access the full text.

# Technologies Used

HTML5 — structures the webpage and article collection.
CSS3 — styles the website, including the Poppins typography, article cards, loading spinner, and error messages.
JavaScript — handles button events, asynchronous requests, DOM manipulation, and error handling.
Google Fonts — provides the Poppins font.
Fetch API — requests data from the JSONPlaceholder API.
JSONPlaceholder API — provides sample blog post data for the practical activity.

# Project Files

index.html — contains the website structure and controls.
style.css — contains the visual design and responsive layout.
script.js — contains the curated article collection, Fetch API request, loading state, error handling, and dynamic rendering.
README.md — documents the project and explains how to run it.

# Article Collection

The website features five curated reading selections:

The Slow Burn of Becoming Yourself — Substack
Bawal Mangarap Nang Malayo Kapag Sakto Lang ang Pamasahe Pabalik — Substack
Maybe It's Time to Meet Yourself Again — Medium
What a Few Minutes of Honest Reflection Revealed About My Life — Medium
I'm Learning to Be Enough Without Becoming Someone Else — Medium

The article cards link to their respective original publisher pages. Full article content is read on those external websites.

# API Endpoint

https://jsonplaceholder.typicode.com/posts

The application makes an asynchronous request to this endpoint as part of the Fetch API activity. The displayed five articles come from the curated collection defined in script.js.

# Required Behaviors Implemented

Load Button Integration — the user initiates the loading process by clicking the Load Posts button.
Async / Await Syntax — uses async and await for the Fetch API request.
First 5 Posts Limit — uses slice(0, 5) to select the five curated articles.
Safe DOM Rendering — uses createElement() and textContent to render article information safely.
Loading Indicators — displays a loading message and spinner while processing the request.
Error Handling — handles unsuccessful HTTP responses and other request errors.
Retry Capability — provides a Try Again button if an error occurs.
No Page Refresh — updates the existing webpage dynamically without a full-page reload.

# How to Run the Project

Open the project folder in Visual Studio Code.
Ensure that index.html, style.css, script.js, and README.md are in the same folder.
Install the Live Server extension if it is not already installed.
Right-click index.html and select Open with Live Server.
Click Load posts to display the article cards.
Click any article card to open its original publisher page in a new browser tab.

# Author

Name: Cabibijan,Matt Febe
Course: 2nd year BSIS
