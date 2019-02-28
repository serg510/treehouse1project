/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = [
  {quote:'Optimism, pessimism, f*ck that – we’re going to make it happen.', source: 'Elon Musk', citation:'WIRED Magazine', year: 2008},
  {quote:"Preservation of one's own culture does not require contempt or disrespect for other cultures.", source: 'Cesar Chavez'},
  {quote:'If you wanna change the world, start off by making your bed.', source: 'US Navy Admiral, William H. McRaven', citation:'University of Texas at Austin Commencement Address', year: 2014},
  {quote:'My fellow Americans, we are and always will be a nation of immigrants.', source:'Barack Obama', citation:'White House Archives', year: 2014},
  {quote: "I’ve wrestled with alligators. I’ve tussled with a whale. I done handcuffed lightning. And throw thunder in jail.", source: 'Muhammad Ali', year: 1974},
  
];


function getRandomQuote(){
 let randomNumber = Math.floor(Math.random()*quotes.length);
 randomNumber = quotes[randomNumber];
return randomNumber;
}


let message = '';
function printQuote(){
  let print = getRandomQuote(quotes);
    message = '<p class="quote">'+print.quote+ '</p>';
    message +='<p class="source">' +print.source;
    if(print.hasOwnProperty('citation')){
    message += '<span class="citation">'+ print.citation+' </span>';
    message += '</p>';
    };
    if(print.hasOwnProperty('year')){
    message += '<span class="year">'+print.year+'</span>';
    message += '</p>';
  }
    let outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML= message;
    randomcolors();
}

function randomcolors(){
let x = [Math.floor(Math.random()*256)];
let y = [Math.floor(Math.random()*256)];
let z = [Math.floor(Math.random()*256)];
let color = "rgb(" +x+","+y+","+z+")";   ///<<---code from w3resource.com
//console.log(color); 
document.body.style.background= color
}
const autoChangeQuote = window.setInterval(printQuote, 4000);


printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.