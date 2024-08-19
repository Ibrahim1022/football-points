// Good Luck! You got this 💪🏾
// Write your code here.


function calculatePoints(wins, draws, losses) {
    // Each win earns 3 points
    let winPoints = wins * 3;
    
    // Each draw earns 1 point
    let drawPoints = draws * 1;
    
    // Losses do not earn any points, so no need to calculate loss points

    // Calculate the total points
    let totalPoints = winPoints + drawPoints;
    
    // Log the total points
    console.log(totalPoints);
}

// Example usage:
calculatePoints(5, 2, 3); // Output: 17