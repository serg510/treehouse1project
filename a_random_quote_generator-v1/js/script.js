/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {quote:'Optimism, pessimism, f*ck that – we’re going to make it happen.', source: 'Elon Musk', citation:'WIRED Magazine'  , year: 2008},
  {quote:"Preservation of one's own culture does not require contempt or disrespect for other cultures.", source: 'Cesar Chavez', citation:'Huffington Post'  ,},
  {quote:'If you wanna change the world, start off by making your bed.', source: 'US Navy Admiral, William H. McRaven', citation:'University of Texas at Austin, Commencement Address'  , year: 2014},
  {quote:'My fellow Americans, we are and always will be a nation of immigrants.', source: 'Barack Obama', citation:'White House Archives'  , year: 2014},
  {quote: "I’ve wrestled with alligators. I’ve tussled with a whale. I done handcuffed lightning. And throw thunder in jail.", source: 'Muhammad Ali', citation:'History Channel'  , year: 1974},
  
];

// console.log(quotes[4].quote);
// console.log(quotes[4].source);
// console.log(quotes[4].citation);
// console.log(quotes[4].year);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(){
 let randomNumber = Math.floor(Math.random()*quotes.length);
 randomNumber = quotes[randomNumber];
return randomNumber;
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
let message = '';
function printQuote(){
  let print = getRandomQuote(quotes);
    message = '<p class="quote">'+print.quote+ '</p>';
    message +='<p class="source">' +print.source;
   // message += '<span class="citation">'+ print.citation+' </span>';
   // message += '<span class="year">'+print.year+'</span>';
    message += '</p>';
  
}
let outputDiv = document.getElementById('quote-box');
outputDiv.innerHTML= message;




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.