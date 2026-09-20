# Dog Photos

A small JavaScript project that retrieves a random dog photo from an external API and displays it in the browser.

## About

This project demonstrates the basics of making an HTTP request from JavaScript.

When the page loads, JavaScript sends a request to the Dog CEO API and receives information about a randomly selected dog image.

The image URL returned by the API is then placed into an `<img>` element on the page.

## How It Works

1. Sends a request to the Dog CEO API using `fetch()`.
2. Receives the API response.
3. Converts the response to JSON.
4. Reads the image URL from the returned data.
5. Places the image into the webpage.

## What I Practiced

- `fetch()`
- APIs
- Promises
- `.then()`
- JSON
- DOM manipulation
- Selecting HTML elements
- Updating element attributes

## Technologies

- HTML5
- CSS3
- JavaScript
- Dog CEO API

## Running the Project

Clone or download the repository and open `index.html` in a browser.

An internet connection is required for the application to retrieve a dog image from the API.

## Purpose

This project was created to practice retrieving data from an external API and using the response to update the DOM.
