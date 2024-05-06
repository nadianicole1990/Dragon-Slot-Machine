/*----- constants -----*/

// Store pay table info in object?

// Store symbols in an array of objects
const slotSymbols = [
    {
        symbolPosition: 1,
        symbolName: "gold-dragon",
    },
    {
        symbolPosition: 2,
        symbolName: "wild",
    },
    {
        symbolPosition: 3,
        symbolName: "color-dragon",
    },
    {
        symbolPosition: 4,
        symbolName: "seven",
    },
    {
        symbolPosition: 5,
        symbolName: "white-dragon",
    },
    {
        symbolPosition: 6,
        symbolName: "jackpot",
    },
    {
        symbolPosition: 7,
        symbolName: "gold-egg",
    },
    {
        symbolPosition: 8,
        symbolName: "fire-bowl",
    },
    {
        symbolPosition: 9,
        symbolName: "color-egg",
    },
    {
        symbolPosition: 10,
        symbolName: "white-egg",
    },
]

const reelOne = document.querySelector("#reel-one");
const reelTwo = document.querySelector("#reel-two");
const reelThree = document.querySelector("#reel-three");

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
    Math.round(Math.random * slotSymbols.length);
}

// Need a function to execute when play button is clicked
// Call spin function on each reel
// Return outcome
// Play button either disabled until wager, or makes default wager of one credit
function play() {
    spin(reelOne);
    spin(reelTwo);
    spin(reelThree);
}

// Need a function to "evaluate" results along the play line to determine outcome.
function outcome() {
    return winnings
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