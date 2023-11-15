


// Variables for eventListener function

let newQuoteBtn = document.querySelector("#new-quote-button");
let newQuote = document.getElementById("text");
let newPerson = document.getElementById("person");

// Variables for to change colors
let body = document.querySelector("#body");
let container = document.querySelector(".container");
let twitter = document.querySelector(".twitter");
let tumblr = document.querySelector(".tumblr");
let btn = document.querySelector("#new-quote-button");



// Quotes
const quotes = [
    {   newQuote : "Lekelere düşman, çamaşıra dost."
        ,
        newPerson : "- ACE"
    },
    {   newQuote : "Güç kontrol altında."
        ,
        newPerson : "- Audi"
    },
    {   newQuote : "Lezzet güneşi."
        ,
        newPerson : "- Banvit"
    },
    {   newQuote : "Ateş seni çağırıooo."
    ,
        newPerson : "- Burger King"
}
];


//Colors - first way to create different color variables ;

// const colors = [
//     "#DA702D",
//     "#313841",
//     "#45577D",
//     "#BE3143",
//     "#DDDDDD",
//     "#F8E82B",
//     "#F6E1B9"
// ]





newQuoteBtn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
   
    newQuote.textContent = quotes[random].newQuote;
    newPerson.textContent = quotes[random].newPerson;


    //First way to add different colors ;
    // body.style.backgroundColor = colors[random];
    // body.style.color = colors[random];
    // twitter.style.backgroundColor = colors[random];
    // tumblr.style.backgroundColor = colors[random];
    // btn.style.backgroundColor = colors[random];


    
    // Second way to create different colors and add them to elements ;
    function changeColors() {
        let words = "abcdef1234567890";
        let ıcon = "#";
    
        for(let i = 0; i < 6; i++){
           ıcon = ıcon + words[Math.floor(Math.random()*16)];
        }
        return ıcon;
        
    }

    let fınalColor = changeColors();

    body.style.backgroundColor = fınalColor;
    body.style.color = fınalColor;
    twitter.style.backgroundColor = fınalColor;
    tumblr.style.backgroundColor = fınalColor;
    btn.style.backgroundColor = fınalColor;

    

});





