/*----- constants -----*/
const symbolHeight = "200px";
const numSymbols = 9;

// Store symbols in an array of objects
const firstReel = [
    {
        symbolPosition: 1,
        symbolName: "color-dragon",
    },
    {
        symbolPosition: 2,
        symbolName: "gold-egg",
    },
    {
        symbolPosition: 3,
        symbolName: "fire-bowl",
    },
    {
        symbolPosition: 4,
        symbolName: "white-dragon",
    },
    {
        symbolPosition: 5,
        symbolName: "color-egg",
    },
    {
        symbolPosition: 6,
        symbolName: "jackpot",
    },
    {
        symbolPosition: 7,
        symbolName: "gold-dragon",
    },
    {
        symbolPosition: 8,
        symbolName: "white-egg",
    },
    {
        symbolPosition: 9,
        symbolName: "seven",
    },
]
const secondReel = [
    {
        symbolPosition: 1,
        symbolName: "gold-dragon",
    },
    {
        symbolPosition: 2,
        symbolName: "color-egg",
    },
    {
        symbolPosition: 3,
        symbolName: "seven",
    },
    {
        symbolPosition: 4,
        symbolName: "color-dragon",
    },
    {
        symbolPosition: 5,
        symbolName: "white-egg",
    },
    {
        symbolPosition: 6,
        symbolName: "fire-bowl",
    },
    {
        symbolPosition: 7,
        symbolName: "white-dragon",
    },
    {
        symbolPosition: 8,
        symbolName: "gold-egg",
    },
    {
        symbolPosition: 9,
        symbolName: "jackpot",
    },
]
const thirdReel = [
    {
        symbolPosition: 1,
        symbolName: "white-dragon",
    },
    {
        symbolPosition: 2,
        symbolName: "white-egg",
    },
    {
        symbolPosition: 3,
        symbolName: "jackpot",
    },
    {
        symbolPosition: 4,
        symbolName: "gold-dragon",
    },
    {
        symbolPosition: 5,
        symbolName: "gold-egg",
    },
    {
        symbolPosition: 6,
        symbolName: "seven",
    },
    {
        symbolPosition: 7,
        symbolName: "color-dragon",
    },
    {
        symbolPosition: 8,
        symbolName: "color-egg",
    },
    {
        symbolPosition: 9,
        symbolName: "fire-bowl",
    },
]

let credits = 50;
let wager = 0;
let winnings = 0;

/*----- event listeners -----*/

const playButton = document.querySelector("#trigger-round");
playButton.addEventListener("click", letsGo());

// const oneButton = document.querySelector("#one-credit");
// oneButton.addEventListener("click", betOne); 

// const twoButton = document.querySelector("#two-credit");
// twoButton.addEventListener("click", betTwo); 

// const threeButton = document.querySelector("#three-credit");
// threeButton.addEventListener("click", betThree);

/*----- functions -----*/

// function betOne() {
//     credits = credits - 1;
//     wager = 1;
// }
// function betTwo() {
//     credits = credits - 2;
//     wager = 2;
// }
// function betThree() {
//     credits = credits - 3;
//     wager = 3;
// }

// "Spin" Reels: Only 3 positions on the reel visible, Animate change
// Execute a random number generator

let a = Math.round(Math.random() * numSymbols);
let b = Math.round(Math.random() * numSymbols);
let c = Math.round(Math.random() * numSymbols);

function spinOne() {
    const reelOne = document.getElementById("reel-one");
    reelOne.style.setProperty("--animation", "spinReel");
}
function spinTwo() {
    const reelTwo = document.getElementById("reel-two");
}
function spinThree() {
    const reelThree = document.getElementById("reel-three");
}

function letsGo() {
    spinOne();
    spinTwo();
    spinThree();
}

// This could maybe be a for loop? Seems wordy.
// ALERTS && SPIN (ANIMATION ACTIVE) LISTENER
// let win;
// function comparePayline() {
//     if (firstReel[a].symbolName === "gold-dragon" && secondReel[b].symbolName === "gold-dragon" && thirdReel[c].symbolName === "gold-dragon") {
//         console.log("Woot we have a gold-dragon win.");
//         win = true;
//         winnings = 5;
//         credits = credits + 5;
//         } else { if (firstReel[a].symbolName === "white-egg" && secondReel[b].symbolName === "white-egg" && thirdReel[c].symbolName === "white-egg") {
//             console.log("Woot we have a white-egg win.");
//             win = true;
//             winnings = 125;
//             credits = credits + 125;
//             } else { if (firstReel[a].symbolName === "color-dragon" && secondReel[b].symbolName === "color-dragon" && thirdReel[c].symbolName === "color-dragon") {
//                 console.log("Woot we have a color-dragon win.");
//                 win = true;
//                 winnings = 25;
//                 credits = credits + 25;
//                 } else { if (firstReel[a].symbolName === "seven" && secondReel[b].symbolName === "seven" && thirdReel[c].symbolName === "seven") {
//                     console.log("Woot we have a seven win.");
//                     win = true;
//                     winnings = 75;
//                     credits = credits + 75;
//                     } else { if (firstReel[a].symbolName === "white-dragon" && secondReel[b].symbolName === "white-dragon" && thirdReel[c].symbolName === "white-dragon") {
//                         console.log("Woot we have a white-dragon win.");
//                         win = true;
//                         winnings = 1250;
//                         credits = credits + 1250;
//                         } else { if (firstReel[a].symbolName === "jackpot" && secondReel[b].symbolName === "jackpot" && thirdReel[c].symbolName === "jackpot") {
//                             console.log("Woot we have a jackpot win.");
//                             win = true;
//                             winnings = 15;
//                             credits = credits + 15;
//                             } else { if (firstReel[a].symbolName === "gold-egg" && secondReel[b].symbolName === "gold-egg" && thirdReel[c].symbolName === "gold-egg") {
//                                 console.log("Woot we have a gold-egg win.");
//                                 win = true;
//                                 winnings = 3;
//                                 credits = credits + 3;
//                                 } else { if (firstReel[a].symbolName === "fire-bowl" && secondReel[b].symbolName === "fire-bowl" && thirdReel[c].symbolName === "fire-bowl") {
//                                     console.log("Woot we have a fire-bowl win.");
//                                     win = true;
//                                     winnings = 10;
//                                     credits = credits + 10;
//                                     } else { if (firstReel[a].symbolName === "color-egg" && secondReel[b].symbolName === "color-egg" && thirdReel[c].symbolName === "color-egg") {
//                                         console.log("Woot we have a color-egg win.");
//                                         win = true;
//                                         winnings = 1;
//                                         credits = credits + 1;
//                                             } else {
//                                                 console.log("Oof, better luck next time.");
//                                                 win = false;
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// function play() {
//     console.log("Game should start.")
//     spinOne();
//     spinTwo();
//     spinThree();
//     compareMiddles();
//     setTimeout(outcome, 500);
// }

// // Need a function to "evaluate" results along the play line to determine outcome.
// function outcome() {
//     if (win === true) {
//         console.log(win);
//         document.getElementById("outcome-content-win").style.display = "flex";
//     } else {
//         if (win === false) {
//             console.log(win);
//             document.getElementById("outcome-content-lose").style.display = "flex";
//         }
//     }
// }

// document.getElementById("exit").addEventListener("click", function() {
//     document.getElementById("outcome-content-win").style.display = "none";
//     document.getElementById("outcome-content-lose").style.display = "none";
// });

// //Need a function to regulary update values along the credit line
// setInterval(function() {
//     const creditsDisplay = document.getElementById("creditstarget");
//     creditstarget.innerHTML = credits;
//     // const wagerDisplay = document.getElementById("wagertarget");
//     // wagertarget.innerHTML = wager;
//     const currentWinDisplay = document.getElementById("winningstarget");
//     winningstarget.innerHTML = winnings;
// }, 500)

// document.getElementById("open-paytable").addEventListener("click", function() {
//     document.querySelector(".paytable").style.display = "flex";
// });
// document.querySelector("#close").addEventListener("click", function() {
//     document.querySelector(".paytable").style.display = "none";
// });

// /*----- future features -----*/
// // Multiplier symbols
// // Sticky symbols