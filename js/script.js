const reelOneOutcome = [
    {
        animation: "spin-one 5s forwards",
        symbol: "color-dragon"
    },
    {
        animation: "spin-two 5s forwards",
        symbol: "gold-egg"
    },
    {
        animation: "spin-three 5s forwards",
        symbol: "seven"
    },
    {
        animation: "spin-four 5s forwards",
        symbol: "white-dragon"
    },
    {
        animation: "spin-five 5s forwards",
        symbol: "color-egg"
    },
    {
        animation: "spin-six 5s forwards",
        symbol: "fire-bowl"
    },
    {
        animation: "spin-seven 5s forwards",
        symbol: "gold-dragon"
    },
    {
        animation: "spin-eight 5s forwards",
        symbol: "white-egg"
    },
    {
        animation: "spin-nine 5s forwards",
        symbol: "jackpot"
    }
]

const reelTwoOutcome = [
    {
        animation: "spin-one 5s .5s forwards",
        symbol: "gold-dragon"
    },
    {
        animation: "spin-two 5s .5s forwards",
        symbol: "color-egg"
    },
    {
        animation: "spin-three 5s .5s forwards",
        symbol: "fire-bowl"
    },
    {
        animation: "spin-four 5s .5s forwards",
        symbol: "color-dragon"
    },
    {
        animation: "spin-five 5s .5s forwards",
        symbol: "white-egg"
    },
    {
        animation: "spin-six 5s .5s forwards",
        symbol: "seven"
    },
    {
        animation: "spin-seven 5s .5s forwards",
        symbol: "white-dragon"
    },
    {
        animation: "spin-eight 5s .5s forwards",
        symbol: "gold-egg"
    },
    {
        animation: "spin-nine 5s .5s forwards",
        symbol: "jackpot"
    }
]

const reelThreeOutcome = [
    {
        animation: "spin-one 5s 1s forwards",
        symbol: "white-dragon"
    },
    {
        animation: "spin-two 5s 1s forwards",
        symbol: "white-egg"
    },
    {
        animation: "spin-three 5s 1s forwards",
        symbol: "jackpot"
    },
    {
        animation: "spin-four 5s 1s forwards",
        symbol: "gold-dragon"
    },
    {
        animation: "spin-five 5s 1s forwards",
        symbol: "gold-egg"
    },
    {
        animation: "spin-six 5s 1s forwards",
        symbol: "seven"
    },
    {
        animation: "spin-seven 5s 1s forwards",
        symbol: "color-dragon"
    },
    {
        animation: "spin-eight 5s 1s forwards",
        symbol: "color-egg"
    },
    {
        animation: "spin-nine 5s 1s forwards",
        symbol: "fire-bowl"
    }
]

let credits = 50;
// let wager = 0;
let winnings = 0;

// const oneButton = document.querySelector("#one-credit");
// oneButton.addEventListener("click", betOne); 

// const twoButton = document.querySelector("#two-credit");
// twoButton.addEventListener("click", betTwo); 

// const threeButton = document.querySelector("#three-credit");
// threeButton.addEventListener("click", betThree);

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

let a = Math.round(Math.random() * (reelOneOutcome.length-1));
console.log(a);
let b = Math.round(Math.random() * (reelTwoOutcome.length-1));
console.log(b);
let c = Math.round(Math.random() * (reelThreeOutcome.length-1));
console.log(c);

function spinOne() {
    console.log("one should spin");
    document.getElementById("reel-one").style.animation = reelOneOutcome[a].animation;
}
function spinTwo() {
    console.log("two should spin");
    document.getElementById("reel-two").style.animation = reelTwoOutcome[b].animation;
}
function spinThree() {
    console.log("three should spin");
    document.getElementById("reel-three").style.animation = reelThreeOutcome[c].animation;
}



function play() {
    credits = credits-1
    spinOne();
    spinTwo();
    spinThree();
}

function outcome() {
    if (win === true) {
        console.log(win);
        document.getElementById("outcome-content-win").style.display = "flex";
    } else {
        if (win === false) {
            console.log(win);
            document.getElementById("outcome-content-lose").style.display = "flex";
        }
    }
}

const playButton = document.querySelector("#trigger-round");
playButton.addEventListener("click", play);

// This could maybe be a for loop? Seems wordy.
// ALERTS && SPIN (ANIMATION ACTIVE) LISTENER

// function play() {
//     console.log("Game should start.")
//     spinOne();
//     spinTwo();
//     spinThree();
//     compareMiddles();
//     setTimeout(outcome, 500);
// }

document.getElementById("exit").addEventListener("click", function() {
    document.getElementById("outcome-content-win").style.display = "none";
    document.getElementById("outcome-content-lose").style.display = "none";
});

//Need a function to regulary update values along the credit line
setInterval(function() {
    const creditsDisplay = document.getElementById("creditstarget");
    creditstarget.innerHTML = credits;
    // const wagerDisplay = document.getElementById("wagertarget");
    // wagertarget.innerHTML = wager;
    const currentWinDisplay = document.getElementById("winningstarget");
    winningstarget.innerHTML = winnings;
}, 500)

document.getElementById("open-paytable").addEventListener("click", function() {
    document.querySelector(".paytable").style.display = "flex";
});
document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".paytable").style.display = "none";
});

/*----- future features -----*/
// Multiplier symbols
// Sticky symbols