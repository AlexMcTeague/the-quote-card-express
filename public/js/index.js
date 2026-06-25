"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

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
