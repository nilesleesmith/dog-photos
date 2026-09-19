//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        document.querySelector("img").src = data.message;
    });