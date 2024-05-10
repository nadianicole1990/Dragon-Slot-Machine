/*----- constants -----*/

// Store symbols in an array of objects
const firstReel = [
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
    }
]
const secondReel = [
    {
        symbolPosition: 1,
        symbolName: "wild",
        imageSource: `<img src="../images/wild.png">`
    },
    {
        symbolPosition: 2,
        symbolName: "seven",
        imageSource: `<img src="../images/seven.png">`
    },
    {
        symbolPosition: 3,
        symbolName: "gold-dragon",
        imageSource: `<img src="../images/dragon-gold.png">`
    },
    {
        symbolPosition: 4,
        symbolName: "white-egg",
        imageSource: `<img src="../images/egg-white.png">`
    },
    {
        symbolPosition: 5,
        symbolName: "white-dragon",
        imageSource: `<img src="../images/dragon-white.png">`
    },
    {
        symbolPosition: 6,
        symbolName: "gold-egg",
        imageSource: `<img src="../images/egg-gold.png">`
    },
    {
        symbolPosition: 7,
        symbolName: "color-dragon",
        imageSource: `<img src="../images/dragon-multi.png">`
    },
    {
        symbolPosition: 8,
        symbolName: "fire-bowl",
        imageSource: `<img src="../images/fire-bowl.png">`
    },
    {
        symbolPosition: 9,
        symbolName: "jackpot",
        imageSource: `<img src="../images/jackpot.png">`
    },
    {
        symbolPosition: 10,
        symbolName: "color-egg",
        imageSource: `<img src="../images/egg-multi.png">`
    },
    {
        symbolPosition: 1,
        symbolName: "wild",
        imageSource: `<img src="../images/wild.png">`
    },
    {
        symbolPosition: 2,
        symbolName: "seven",
        imageSource: `<img src="../images/seven.png">`
    },
    {
        symbolPosition: 3,
        symbolName: "gold-dragon",
        imageSource: `<img src="../images/dragon-gold.png">`
    }
]
const thirdReel = [
    {
        symbolPosition: 1,
        symbolName: "gold-dragon",
        imageSource: `<img src="../images/dragon-gold.png">`
    },
    {
        symbolPosition: 2,
        symbolName: "color-egg",
        imageSource: `<img src="../images/egg-multi.png">`
    },
    {
        symbolPosition: 3,
        symbolName: "seven",
        imageSource: `<img src="../images/seven.png">`
    },
    {
        symbolPosition: 4,
        symbolName: "white-egg",
        imageSource: `<img src="../images/egg-white.png">`
    },
    {
        symbolPosition: 5,
        symbolName: "wild",
        imageSource: `<img src="../images/wild.png">`
    },
    {
        symbolPosition: 6,
        symbolName: "color-dragon",
        imageSource: `<img src="../images/dragon-multi.png">`
    },
    {
        symbolPosition: 7,
        symbolName: "fire-bowl",
        imageSource: `<img src="../images/fire-bowl.png">`
    },
    {
        symbolPosition: 8,
        symbolName: "white-dragon",
        imageSource: `<img src="../images/dragon-white.png">`
    },
    {
        symbolPosition: 9,
        symbolName: "jackpot",
        imageSource: `<img src="../images/jackpot.png">`
    },
    {
        symbolPosition: 10,
        symbolName: "gold-egg",
        imageSource: `<img src="../images/egg-gold.png">`
    },
    {
        symbolPosition: 1,
        symbolName: "gold-dragon",
        imageSource: `<img src="../images/dragon-gold.png">`
    },
    {
        symbolPosition: 2,
        symbolName: "color-egg",
        imageSource: `<img src="../images/egg-multi.png">`
    },
    {
        symbolPosition: 3,
        symbolName: "seven",
        imageSource: `<img src="../images/seven.png">`
    }
]

let oneTop = document.getElementById("onetoptarget");
onetoptarget.innerHTML = firstReel[0].imageSource;
let oneMiddle = document.getElementById("onemiddletarget");
onemiddletarget.innerHTML = firstReel[1].imageSource;
let oneBottom = document.getElementById("onebottomtarget");
onebottomtarget.innerHTML = firstReel[2].imageSource;


let twoTop = document.getElementById("twotoptarget");
twotoptarget.innerHTML = secondReel[0].imageSource;
let twoMiddle = document.getElementById("twomiddletarget");
twomiddletarget.innerHTML = secondReel[1].imageSource;
let twoBottom = document.getElementById("twobottomtarget");
twobottomtarget.innerHTML = secondReel[2].imageSource;

let threeTop = document.getElementById("threetoptarget");
threetoptarget.innerHTML = thirdReel[0].imageSource;
let threeMiddle = document.getElementById("threemiddletarget");
threemiddletarget.innerHTML = thirdReel[1].imageSource;
let threeBottom = document.getElementById("threebottomtarget");
threebottomtarget.innerHTML = thirdReel[2].imageSource;

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
    a = Math.round(Math.random() * (firstReel.length-3));
    console.log(a);
    oneTop = document.getElementById("onetoptarget");
    onetoptarget.innerHTML = firstReel[a+1].imageSource;
    oneMiddle = document.getElementById("onemiddletarget");
    onemiddletarget.innerHTML = firstReel[a].imageSource;
    oneBottom = document.getElementById("onebottomtarget");
    onebottomtarget.innerHTML = firstReel[a+2].imageSource;
}
function spinTwo() {
    b = Math.round(Math.random() * (secondReel.length-3));
    console.log(b);
    twoTop = document.getElementById("twotoptarget");
    twotoptarget.innerHTML = secondReel[b+1].imageSource;
    twoMiddle = document.getElementById("twomiddletarget");
    twomiddletarget.innerHTML = secondReel[b].imageSource;
    twoBottom = document.getElementById("twobottomtarget");
    twobottomtarget.innerHTML = secondReel[b+2].imageSource;
}
function spinThree() {
    c = Math.round(Math.random() * (thirdReel.length-3));
    console.log(c);
    threeTop = document.getElementById("threetoptarget");
    threetoptarget.innerHTML = thirdReel[c+1].imageSource;
    threeMiddle = document.getElementById("threemiddletarget");
    threemiddletarget.innerHTML = thirdReel[c].imageSource;
    threeBottom = document.getElementById("threebottomtarget");
    threebottomtarget.innerHTML = thirdReel[c+2].imageSource;
}
// This could maybe be a for loop? Seems wordy.
// Need to evaluate for white egg && color dragon when image is the same, but array position is not.
// Incorporate slotSymbols.symbolPosition maybe?
function compareMiddles() {
    if (firstReel[a].symbolName === "gold-dragon" && secondReel[b].symbolName === "gold-dragon" && thirdReel[c].symbolName === "gold-dragon") {
        console.log("Woot we have a gold-dragon win.");
        winnings = 5;
        credits = credits + 5;
        } else { if (firstReel[a].symbolName === "white-egg" && secondReel[b].symbolName === "white-egg" && thirdReel[c].symbolName === "white-egg") {
            console.log("Woot we have a white-egg win.");
            winnings = 125;
            credits = credits + 125;
            } else { if (firstReel[a].symbolName === "color-dragon" && secondReel[b].symbolName === "color-dragon" && thirdReel[c].symbolName === "color-dragon") {
                console.log("Woot we have a color-dragon win.");
                winnings = 25;
                credits = credits + 25;
                } else { if (firstReel[a].symbolName === "seven" && secondReel[b].symbolName === "seven" && thirdReel[c].symbolName === "seven") {
                    console.log("Woot we have a seven win.");
                    winnings = 75;
                    credits = credits + 75;
                    } else { if (firstReel[a].symbolName === "white-dragon" && secondReel[b].symbolName === "white-dragon" && thirdReel[c].symbolName === "white-dragon") {
                        console.log("Woot we have a white-dragon win.");
                        winnings = 1250;
                        credits = credits + 1250;
                        } else { if (firstReel[a].symbolName === "jackpot" && secondReel[b].symbolName === "jackpot" && thirdReel[c].symbolName === "jackpot") {
                            console.log("Woot we have a jackpot win.");
                            winnings = 15;
                            credits = credits + 15;
                            } else { if (firstReel[a].symbolName === "gold-egg" && secondReel[b].symbolName === "gold-egg" && thirdReel[c].symbolName === "gold-egg") {
                                console.log("Woot we have a gold-egg win.");
                                winnings = 3;
                                credits = credits + 3;
                                } else { if (firstReel[a].symbolName === "fire-bowl" && secondReel[b].symbolName === "fire-bowl" && thirdReel[c].symbolName === "fire-bowl") {
                                console.log("Woot we have a fire-bowl win.");
                                winnings = 10;
                                credits = credits + 10;
                                    } else { if (firstReel[a].symbolName === "color-egg" && secondReel[b].symbolName === "color-egg" && thirdReel[c].symbolName === "color-egg") {
                                    console.log("Woot we have a color-egg win.");
                                    winnings = 1;
                                    credits = credits + 1;
                                        } else { if (firstReel[a].symbolName === "wild" && secondReel[b].symbolName === "wild" && thirdReel[c].symbolName === "wild") {
                                        console.log("Woot we have a wild win.");
                                        winnings = 250;
                                        credits = credits + 250;
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