# Tic-Tac-Toe
- Made with React.
- Created and Deployed with Vite.
- Designed with CSS.

This Game is the modern version of the old tic-tac-toe game with more smoother animations.

The uniqueness in this game is it has a computer version which is **UNBEATABLE** , well i think only experts can beat it.

### logic behind the *Unbeatable* mode
- Well I've used the Min-Max algorithm which is an efficient way to get a better move for the computer to choose to win.
- This algorithm will recursively traverse and checks all the possibilities where computer can put `O` and it assigns `score` value for each move it has traversed.
- Now at last the computer will choose the move with max score.

### scoring
The scoring is done based on another variable called `depth` this indicates how much deep the algorithm went(it increments at every recursive function call).

In this way the computer moves are done and , this Hard mode will be un defeatable by normal users.

Hope you like this game.
checkout the code if you are interested.
