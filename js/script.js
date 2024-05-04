/*----- constants -----*/
// Store symbols in an array of objects
// Should there be a "slotSymbols" array for each reel (example shown)?
// Or should this single array hold the three corresponding positions across the reels?
const slotSymbols = [
    {
        symbolPosition: 1,
        symbolName: "egg",
        symbolValue: 0,
    },
    {
        symbolPosition: 2,
        symbolName: "fire",
        symbolValue: 0,
    },
    {
        symbolPosition: 3,
        symbolName: "baby-dragon",
        symbolValue: 0,
    },
    {
        symbolPosition: 4,
        symbolName: "dragon",
        symbolValue: 0,
    },
    {
        symbolPosition: 5,
        symbolName: "sevens",
        symbolValue: 0,
    },
    {
        symbolPosition: 6,
        symbolName: "one-bar",
        symbolValue: 0,
    },
    {
        symbolPosition: 7,
        symbolName: "two-bar",
        symbolValue: 0,
    },
    {
        symbolPosition: 8,
        symbolName: "three-bar",
        symbolValue: 0,
    },
    {
        symbolPosition: 9,
        symbolName: "wild",
        symbolValue: 0,
    },
    {
        symbolPosition: 10,
        symbolName: "jackpot",
        symbolValue: 0,
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