const reelOneOutcome = [
    {
        animation: "spin-one 5s forwards",
        symbol: "jackpot"
    },
    {
        animation: "spin-two 5s forwards",
        symbol: "white-egg"
    },
    {
        animation: "spin-three 5s forwards",
        symbol: "gold-dragon"
    },
    {
        animation: "spin-four 5s forwards",
        symbol: "fire-bowl"
    },
    {
        animation: "spin-five 5s forwards",
        symbol: "color-egg"
    },
    {
        animation: "spin-six 5s forwards",
        symbol: "white-dragon"
    },
    {
        animation: "spin-seven 5s forwards",
        symbol: "seven"
    },
    {
        animation: "spin-eight 5s forwards",
        symbol: "gold-egg"
    },
    {
        animation: "spin-nine 5s forwards",
        symbol: "color-dragon"
    },
]

const reelTwoOutcome = [
    {
        animation: "spin-one 5s .5s forwards",
        symbol: "jackpot"
    },
    {
        animation: "spin-two 5s .5s forwards",
        symbol: "gold-egg"
    },
    {
        animation: "spin-three 5s .5s forwards",
        symbol: "white-dragon"
    },
    {
        animation: "spin-four 5s .5s forwards",
        symbol: "seven"
    },
    {
        animation: "spin-five 5s .5s forwards",
        symbol: "white-egg"
    },
    {
        animation: "spin-six 5s .5s forwards",
        symbol: "color-dragon"
    },
    {
        animation: "spin-seven 5s .5s forwards",
        symbol: "fire-bowl"
    },
    {
        animation: "spin-eight 5s .5s forwards",
        symbol: "color-egg"
    },
    {
        animation: "spin-nine 5s .5s forwards",
        symbol: "gold-dragon"
    }
]

const reelThreeOutcome = [
    {
        animation: "spin-one 5s 1s forwards",
        symbol: "fire-bowl"
    },
    {
        animation: "spin-two 5s 1s forwards",
        symbol: "color-egg"
    },
    {
        animation: "spin-three 5s 1s forwards",
        symbol: "color-dragon"
    },
    {
        animation: "spin-four 5s 1s forwards",
        symbol: "seven"
    },
    {
        animation: "spin-five 5s 1s forwards",
        symbol: "gold-egg"
    },
    {
        animation: "spin-six 5s 1s forwards",
        symbol: "gold-dragon"
    },
    {
        animation: "spin-seven 5s 1s forwards",
        symbol: "jackpot"
    },
    {
        animation: "spin-eight 5s 1s forwards",
        symbol: "white-egg"
    },
    {
        animation: "spin-nine 5s 1s forwards",
        symbol: "white-dragon"
    }
]

let a = Math.round(Math.random() * (reelOneOutcome.length-1));
console.log(a);
let b = Math.round(Math.random() * (reelTwoOutcome.length-1));
console.log(b);
let c = Math.round(Math.random() * (reelThreeOutcome.length-1));
console.log(c);

function spinOne() {
    document.getElementById("reel-one").style.animation = reelOneOutcome[a].animation;
}
function spinTwo() {
    document.getElementById("reel-two").style.animation = reelTwoOutcome[b].animation;
}
function spinThree() {
    document.getElementById("reel-three").style.animation = reelThreeOutcome[c].animation;
}

let credits = 50;
let winnings = 0;
let win;

function comparePayline() {
    if (reelOneOutcome[a].symbol === "gold-dragon" && reelTwoOutcome[b].symbol === "gold-dragon" && reelThreeOutcome[c].symbol === "gold-dragon") {
        win = true;
        winnings = 5;
        credits = credits + 5;
        } else { if (reelOneOutcome[a].symbol === "white-egg" && reelTwoOutcome[b].symbol === "white-egg" && reelThreeOutcome[c].symbol === "white-egg") {
            win = true;
            winnings = 125;
            credits = credits + 125;
            } else { if (reelOneOutcome[a].symbol === "color-dragon" && reelTwoOutcome[b].symbol === "color-dragon" && reelThreeOutcome[c].symbol === "color-dragon") {
                win = true;
                winnings = 25;
                credits = credits + 25;
                } else { if (reelOneOutcome[a].symbol === "seven" && reelTwoOutcome[b].symbol === "seven" && reelThreeOutcome[c].symbol === "seven") {
                    win = true;
                    winnings = 75;
                    credits = credits + 75;
                    } else { if (reelOneOutcome[a].symbol === "white-dragon" && reelTwoOutcome[b].symbol === "white-dragon" && reelThreeOutcome[c].symbol === "white-dragon") {
                        win = true;
                        winnings = 1250;
                        credits = credits + 1250;
                        } else { if (reelOneOutcome[a].symbol === "jackpot" && reelTwoOutcome[b].symbol === "jackpot" && reelThreeOutcome[c].symbol === "jackpot") {
                            win = true;
                            winnings = 15;
                            credits = credits + 15;
                            } else { if (reelOneOutcome[a].symbol === "gold-egg" && reelTwoOutcome[b].symbol === "gold-egg" && reelThreeOutcome[c].symbol === "gold-egg") {
                                win = true;
                                winnings = 3;
                                credits = credits + 3;
                                } else { if (reelOneOutcome[a].symbol === "fire-bowl" && reelTwoOutcome[b].symbol === "fire-bowl" && reelThreeOutcome[c].symbol === "fire-bowl") {
                                win = true;
                                winnings = 10;
                                credits = credits + 10;
                                    } else { if (reelOneOutcome[a].symbol === "color-egg" && reelTwoOutcome[b].symbol === "color-egg" && reelThreeOutcome[c].symbol === "color-egg") {
                                    win = true;
                                    winnings = 1;
                                    credits = credits + 1;
                                        } else { if (reelOneOutcome[a].symbol === "wild" && reelTwoOutcome[b].symbol === "wild" && reelThreeOutcome[c].symbol === "wild") {
                                        win = true;
                                        winnings = 250;
                                        credits = credits + 250;
                                            } else { if (reelOneOutcome[a].symbol === "color-egg" && reelTwoOutcome[b].symbol === "color-egg" && reelThreeOutcome[c].symbol === "color-egg") {
                                            win = true;
                                            winnings = 1;
                                            credits = credits + 1;
                                                } else {
                                                win = false;
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
}

function outcome() {
    if (win === true) {
        console.log(win);
        document.querySelector(".win-modal").style.display = "flex";
    } else {
        if (win === false) {
            console.log(win);
            document.querySelector(".lose-modal").style.display = "flex";
        }
    }
}

function play() {
    credits = credits-1
    spinOne();
    spinTwo();
    spinThree();
    setTimeout(comparePayline, 6500);
    setTimeout(outcome, 6500);
}

const playButton = document.querySelector("#trigger-round");
playButton.addEventListener("click", play);

function reset() {
    document.getElementById("reel-one").style.animation = none;
    document.getElementById("reel-one").style.animation = none;
    document.getElementById("reel-one").style.animation = none;
    winnings = 0;
}

document.getElementById("exitwin").addEventListener("click", function() {
    document.querySelector(".win-modal").style.display = "none";
    reset();
});

document.getElementById("exitlose").addEventListener("click", function() {
    document.querySelector(".lose-modal").style.display = "none";
    reset();
});

setInterval(function() {
    const creditsDisplay = document.getElementById("creditstarget");
    creditstarget.innerHTML = credits;
    const currentWinDisplay = document.getElementById("winningstarget");
    winningstarget.innerHTML = winnings;
}, 500)

document.getElementById("open-paytable").addEventListener("click", function() {
    document.querySelector(".paytable-modal").style.display = "flex";
});
document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".paytable-modal").style.display = "none";
});