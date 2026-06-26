"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    // TODO: use the port defined in server.js (or re-define the port elsewhere)
    const endpoint = "http://localhost:8081/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}

/*
const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },
    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },
    {
        quote: "Limitations foster creativity. Tell an artist to paint anything, and he may struggle, but tell him to create something specific, in a set amount of time, for a certain audience, and these constraints might well push him to produce something he might never have come up with on his own.",
        author: "J.C. McCrae",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;

    setInterval(() => {
        quoteIndex++;
        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }
        elements.quote.textContent = quotes[quoteIndex].quote;
        elements.author.textContent = quotes[quoteIndex].author;
    }, 3000);
}

elements.quote.textContent = quotes[0].quote;
elements.author.textContent = quotes[0].author;
loopThroughQuotes();
*/

// TODO: Fix that the built-in image flashes before being replaced by the random one
getRandomImage();
