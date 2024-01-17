/*
  Problem Statement:
  The problem statement involves efficiently converting a user-entered column label,
  (e.g., "AG") to its corresponding index in a spreadsheet without iterating through all possible columns. 
  This is particularly relevant when dealing with a large number of columns (potentially millions) and aiming to provide a quick response.
*/

function columnToIndex(columnString) {
    let index = 0;
    const length = columnString.length;
    for (let i = 0; i < length; i++) {
        index = index * 26 + (columnString.charCodeAt(i) - 64);
    }

    return index - 1;
}

// Example Input
const userInput = "ZZZ";
const columnIndex = columnToIndex(userInput);
console.log(`Column index for ${userInput}: ${columnIndex}`);

/*

  Challenges:
  Efficiency: Traditional methods of iterating through each character of the column label can be slow when dealing with a large number of columns.

  Quick Response: The function needs to provide a quick response without significant delay, especially in scenarios where the spreadsheet has millions of rows.

  Accuracy: The conversion should accurately determine the corresponding index for the given column label.
*/


/*
  The provided JavaScript function `columnToIndex` addresses these challenges 
  by using a mathematical formula that treats the column label as a base-26 number. 
  This allows for a quick and efficient calculation of the corresponding index 
  without iterating through all possible columns.
*/
