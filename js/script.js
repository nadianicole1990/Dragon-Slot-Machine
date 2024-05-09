/*----- constants -----*/

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

let credits = 50;
let wager = 0;
let winnings = 0;

/*----- state variables -----*/

/*----- cached elements  -----*/

/*----- event listeners -----*/

document.getElementById("open-paytable").addEventListener("click", function() {
    document.querySelector(".paytable").style.display = "flex";
});
document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".paytable").style.display = "none";
});

const oneButton = document.querySelector("#one-credit");
oneButton.addEventListener("click", betOne); 

const twoButton = document.querySelector("#two-credit");
twoButton.addEventListener("click", betTwo); 

const threeButton = document.querySelector("#three-credit");
threeButton.addEventListener("click", betThree);

const playButton = document.querySelector("#trigger-round");
playButton.addEventListener("click", play); 

/*----- functions -----*/

// Functions to accept wager and communicate to...?
// Decrement credits based on wager
// Disable whichever two buttons weren't clicked
function betOne() {
    credits = credits - 1;
    wager = 1;
    // document.getElementById("oneButton").disabled = false;
    // document.getElementById("twoButton").disabled = true;
    // document.getElementById("threeButton").disabled = true;
}
function betTwo() {
    credits = credits - 2;
    wager = 2;
}
function betThree() {
    credits = credits - 3;
    wager = 3;
}

// "Spin" Reels: Only 3 positions on the reel visible, Animate change
// Execute a random number generator
let a;
let b;
let c;
function spinOne() {
    a = Math.round(Math.random() * (slotSymbols.length-3));
    console.log(a);
    oneTop = document.getElementById("onetoptarget");
    onetoptarget.innerHTML = slotSymbols[a].imageSource;
    oneMiddle = document.getElementById("onemiddletarget");
    onemiddletarget.innerHTML = slotSymbols[a+1].imageSource;
    oneBottom = document.getElementById("onebottomtarget");
    onebottomtarget.innerHTML = slotSymbols[a+2].imageSource;
}
function spinTwo() {
    b = Math.round(Math.random() * (slotSymbols.length-3));
    console.log(b);
    twoTop = document.getElementById("twotoptarget");
    twotoptarget.innerHTML = slotSymbols[b].imageSource;
    twoMiddle = document.getElementById("twomiddletarget");
    twomiddletarget.innerHTML = slotSymbols[b+1].imageSource;
    twoBottom = document.getElementById("twobottomtarget");
    twobottomtarget.innerHTML = slotSymbols[b+2].imageSource;
}
function spinThree() {
    c = Math.round(Math.random() * (slotSymbols.length-3));
    console.log(c);
    threeTop = document.getElementById("threetoptarget");
    threetoptarget.innerHTML = slotSymbols[c].imageSource;
    threeMiddle = document.getElementById("threemiddletarget");
    threemiddletarget.innerHTML = slotSymbols[c+1].imageSource;
    threeBottom = document.getElementById("threebottomtarget");
    threebottomtarget.innerHTML = slotSymbols[c+2].imageSource;
}
// This could maybe be a for loop? Seems wordy.
function compareMiddles() {
    if (a === b && b === c && c === 10) {
        console.log("Woot we have a white egg win.")
        } else { if (a === b && b === c && c === 11) {
            console.log("Woot we have a color dragon win.")
            } else { if (a === b && b === c && c === 2) {
                console.log("Woot we have a seven win.")
                } else { if (a === b && b === c && c === 3) {
                    console.log("Woot we have a white dragon win.")
                    } else { if (a === b && b === c && c === 4) {
                        console.log("Woot we have a jackpot win.")
                        } else { if (a === b && b === c && c === 5) {
                            console.log("Woot we have a gold egg win.")
                            } else { if (a === b && b === c && c === 6) {
                                console.log("Woot we have a firebowl win.")
                                } else { if (a === b && b === c && c === 7) {
                                console.log("Woot we have a color egg win.")
                                    } else { if (a === b && b === c && c === 8) {
                                    console.log("Woot we have a wild win.")
                                        } else { if (a === b && b === c && c === 9) {
                                        console.log("Woot we have a gold dragon win.")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// Play button either disabled until wager, or makes default wager of one credit
function play() {
    console.log("Game should start.")
    spinOne();
    spinTwo();
    spinThree();
    compareMiddles();
}

// Need a function to "evaluate" results along the play line to determine outcome.
function outcome() {
    console.log("I update credits according to outcome.")
    return winnings;
}
function lose() {
    if (credits === 0) {
        console.log("GAME OVER")
    }
}

//Need a function to regulary update values along the credit line
setInterval(function() {
    const creditsDisplay = document.getElementById("creditstarget");
    creditstarget.innerHTML = credits;
    const wagerDisplay = document.getElementById("wagertarget");
    wagertarget.innerHTML = wager;
    const currentWinDisplay = document.getElementById("winningstarget");
    winningstarget.innerHTML = winnings;
}, 500)

/*----- future features -----*/
// Multiplier symbols
// Sticky symbols