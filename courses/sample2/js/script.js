/******************************************
project 2 - Quote Show
******************************************/


/*** 
 * `quotes` setup some quotes from the books I read before
***/

const quotes = [
    {
        "quote": "There is no one solution. There are only parts of the solution. You don’t need to do everything.",
        "citation": "The upward spiral",
        "year": "2015-3-1",
        "source": "Alex Korb PhD"
    },
    {
        "quote": "Taking on challenges instead of avoiding them has a greater long-term effect on our self-esteem than winning or losing, failing or succeeding.",
        "citation": "The pusuit of perfect",
        "year": "2009-03-11",
        "source": "Tal Ben-Shahar"
    },
    {
        "quote": "In human life as it’s ordinary lived, there is no one self, no conscious CEO, that runs the show; rather, there seem to be a series of selves that take turns running the show-and, in a sense, seizing control of the show.",
        "citation": "Why Buddhism is true",
        "year": "2017-8-8",
        "source": "Robert Wright"
    },
    {
        "quote": "You try to avoid the experience of painful thoughts or feelings by burying yourself in distracting activities, combating your thoughts with rationalizations, or trying to quash your feelings through the use of controlled substances. If you are suffering, you may spend a lot of time performing these distracting coping techniques. Meanwhile, your life is not being lived.",
        "citation": "Get Out of Your Mind and Into Your Life",
        "year": "2005-11-1",
        "source": "Steven C. Hayes / Spencer Smith "
    },
    {
        "quote": "The pains of love have a chemistry.",
        "citation": "The Brain That Changes Itself",
        "year": "2007-12-18",
        "source": "Norman Doidge"
    },
    {
        "quote": "If you are trying to understand or figure out something new, your best bet is to turn off your precision-focused thinking and turn on your “big picture” diffuse mode.",
        "year": "2014-7-31",
        "source": "Barbara Oakley"
    },
    {
        "quote": "Luck also played an important role.",
        "citation": "So Good They Can't Ignore You",
        "source": "Cal Newport "
    },
];


/***
 * `getRandomQuote` get a random quote from our quotes array
***/
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


/***
 * `printQuote` print the random quote
***/
function printQuote() {
    const newQuote = getRandomQuote();
    const { quote, source, year, citation } = newQuote;
    let PtoHTML1 = `<p class='quote'>${quote}</p><p class='source'>${source}`;

    if(citation) {
        PtoHTML1 = `${PtoHTML1}<span class='citation'>${citation}</span>`;
    }

    if (year) {
        PtoHTML1 = `${PtoHTML1}<span class='year'>${year}</span>`;
    }

    PtoHTML1 = `${PtoHTML1}</p>`;

    document.getElementById('quote-box').innerHTML = PtoHTML1;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);