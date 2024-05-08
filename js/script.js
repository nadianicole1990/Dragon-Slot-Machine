/*----- constants -----*/

// Store pay table info in object?

// Store symbols in an array of objects
const slotSymbols = [
    {
        symbolPosition: 1,
        symbolName: "gold-dragon",
        imageSource: `<img src="../images/dragon-gold.png">`
    },
    {
        symbolPosition: 2,
        symbolName: "white-egg",
        imageSource: `<img src="../images/egg-white.png">`
    },
    {
        symbolPosition: 3,
        symbolName: "color-dragon",
        imageSource: `<img src="../images/dragon-multi.png">`
    },
    {
        symbolPosition: 4,
        symbolName: "seven",
        imageSource: `<img src="../images/seven.png">`
    },
    {
        symbolPosition: 5,
        symbolName: "white-dragon",
        imageSource: `<img src="../images/dragon-white.png">`
    },
    {
        symbolPosition: 6,
        symbolName: "jackpot",
        imageSource: `<img src="../images/jackpot.png">`
    },
    {
        symbolPosition: 7,
        symbolName: "gold-egg",
        imageSource: `<img src="../images/egg-gold.png">`
    },
    {
        symbolPosition: 8,
        symbolName: "fire-bowl",
        imageSource: `<img src="../images/fire-bowl.png">`
    },
    {
        symbolPosition: 9,
        symbolName: "color-egg",
        imageSource: `<img src="../images/egg-multi.png">`
    },
    {
        symbolPosition: 10,
        symbolName: "wild",
        imageSource: `<img src="../images/wild.png">`
    },
]

let oneTop = document.getElementById("onetoptarget");
onetoptarget.innerHTML = slotSymbols[0].imageSource;
let oneMiddle = document.getElementById("onemiddletarget");
onemiddletarget.innerHTML = slotSymbols[1].imageSource;
let oneBottom = document.getElementById("onebottomtarget");
onebottomtarget.innerHTML = slotSymbols[2].imageSource;


let twoTop = document.getElementById("twotoptarget");
twotoptarget.innerHTML = slotSymbols[3].imageSource;
let twoMiddle = document.getElementById("twomiddletarget");
twomiddletarget.innerHTML = slotSymbols[4].imageSource;
let twoBottom = document.getElementById("twobottomtarget");
twobottomtarget.innerHTML = slotSymbols[5].imageSource;

let threeTop = document.getElementById("threetoptarget");
threetoptarget.innerHTML = slotSymbols[6].imageSource;
let threeMiddle = document.getElementById("threemiddletarget");
threemiddletarget.innerHTML = slotSymbols[7].imageSource;
let threeBottom = document.getElementById("threebottomtarget");
threebottomtarget.innerHTML = slotSymbols[8].imageSource;

let credits = 500;
let currentWager = 0;
let winnings = 0;

/*----- state variables -----*/

/*----- cached elements  -----*/

/*----- event listeners -----*/

const playButton = document.querySelector("#trigger-round");
playButton.addEventListener("click", play); 

const oneButton = document.querySelector("#one-credit");
oneButton.addEventListener("click", betOne); 

const twoButton = document.querySelector("#two-credit");
twoButton.addEventListener("click", betTwo); 

const threeButton = document.querySelector("#three-credit");
threeButton.addEventListener("click", betThree); 

/*----- functions -----*/

// Functions to accept wager and communicate to...?
// Decrement credits based on wager
// Disable whichever two buttons weren't clicked
function betOne() {

}
function betTwo() {

}
function betThree() {

}

// "Spin" Reels: Only 3 positions on the reel visible, Animate change
// Execute a random number generator
function spin(reel) {
    console.log("I should spin.")
    Math.round(Math.random * slotSymbols.length);
}

// Need a function to execute when play button is clicked
// Call spin function on each reel
// Return outcome
// Play button either disabled until wager, or makes default wager of one credit
function play() {
    console.log("Game should start.")
    spin(reelOne);
    spin(reelTwo);
    spin(reelThree);
}

// Need a function to "evaluate" results along the play line to determine outcome.
function outcome() {
    console.log("I update credits according to outcome.")
    return winnings;
}

//Need a function to regulary update values along the credit line
setInterval(function() {
    const creditsDisplay = document.getElementById("creditstarget");
    creditstarget.innerHTML = credits;
    const wagerDisplay = document.getElementById("wagertarget");
    wagertarget.innerHTML = currentWager;
    const currentWinDisplay = document.getElementById("winningstarget");
    winningstarget.innerHTML = winnings;
}, 500)

/*----- notes -----*/
// Predetermined Possible Conditions
// SET NUMBER OF WIN CONDITIONS
// SET LOSE CONDITIONS
// Math.random && Other

/*----- future features -----*/
// Multiplier symbols
// Sticky symbols