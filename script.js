let Title = document.querySelector(".title");
let buttons = document.querySelector(".buttons"); 
let Q1 = document.querySelector(".Q1"); 
let Yes = document.querySelector(".option-one");      
let No = document.querySelector(".option-two");    
let Q2 = document.querySelector(".Q-2");
let MrKrabs = document.querySelector(".Mr-Krabs");
let MrKrabsScreen = document.querySelector(".Mr-Krabs-Screen");
let Squidward = document.querySelector(".Squid");
let SquidwardScreen = document.querySelector(".Squid-Screen");
let Plankton = document.querySelector(".Plankton");
let PlanktonScreen = document.querySelector(".Plankton-Screen");
let Q3Screen = document.querySelector(".Sponge-Patrick");
let Q3 = document.querySelector(".Q3");
let Spongebob = document.querySelector(".Spongebob");
let SpongebobScreen = document.querySelector(".Spongebob-Screen");
let Patrick = document.querySelector(".Patrick");
let PatrickScreen = document.querySelector(".Patrick-Screen");
let Homeless = document.querySelector(".Homeless");
let HomelessScreen = document.querySelector(".Homeless-Screen");
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
Yes.addEventListener('click', function(){
    Q2.style.display = "block";
    Q1.style.display = "none";
    Title.style.display = "none";
});
Homeless.addEventListener('click', function(){
    HomelessScreen.style.display = "block";
    Q1.style.display = "none";
    Title.style.display = "none";
});
MrKrabs.addEventListener('click', function(){
    MrKrabsScreen.style.display = "block";
    Title.style.display = "none";
    Q2.style.display = "none";
    Q1.style.display = "none";
    buttons.style.display = "none";
});
Squidward.addEventListener('click', function(){
    SquidwardScreen.style.display = "block";
    Title.style.display = "none";
    Q2.style.display = "none";
    Q1.style.display = "none";
    buttons.style.display = "none";
});
Plankton.addEventListener('click', function(){
    PlanktonScreen.style.display = "block";
    Title.style.display = "none";
    Q2.style.display = "none";
    Q1.style.display = "none";
    buttons.style.display = "none";
});
Q3Screen.addEventListener('click', function(){
    Q3.style.display = "block";
    Title.style.display = "none";
    Q2.style.display = "none";
    Q1.style.display = "none";
    buttons.style.display = "none";
});
Spongebob.addEventListener('click', function(){
    SpongebobScreen.style.display = "block";
    Q3.style.display = "none";
    Title.style.display = "none";
    Q2.style.display = "none";
    Q1.style.display = "none";
    buttons.style.display = "none";
});
Patrick.addEventListener('click', function(){
    PatrickScreen.style.display = "block";
    Q3.style.display = "none";
    Title.style.display = "none";
    Q2.style.display = "none";
    Q1.style.display = "none";
    buttons.style.display = "none";
});