/*----- constants -----*/
// Store symbols in an array of objects
// Should there be a "slotSymbols" array for each reel (example shown)?
// Or should this single array hold the three corresponding positions across the reels?
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
// Store pay table info in object?

/*----- state variables -----*/

/*----- cached elements  -----*/

/*----- event listeners -----*/
// Need an event listener for play button

/*----- functions -----*/
// Need a function to execute when play button is clicked:
// - Decrement Credits
// - "Spin" Reels: Change position of icon, Make only 3 positions visible, Animate change
// Need a function to serve as random number generator (Does this need to run on each reel or should it determine all icons along the payline?).
// Remember to include possibility of wild symbol.
// Need a function (possibly tied into the above function?) to evaluate results along the play line to determine outcome.

/*----- future features -----*/
// Multiplier symbols
// Sticky symbols

// Predetermined Possible Conditions
// SET NUMBER OF WIN CONDITIONS
// SET LOSE CONDITIONS
// Math.random && Other