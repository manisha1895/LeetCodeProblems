/**
 * @param {number} N
 * @return {boolean}
 */

var divisorGame = function (N){
    let AliceWins = new Array(N).fill(false);
    for(let i=1;i<=N;i++){
        for(let x=1;x>0 && x<i;x++){
            if(i%x === 0 && !AliceWins[i-x-1]){
                AliceWins[i-1] = true;
                break;
            }
        }
    }
    return AliceWins[N-1];
}

// Time Complexity : O(n^2)
// Space Complexity : O(n^2)

// Since both players play their best , from bottom up approach it becomes clear
// that for even N only player who plays first i.e. here Alice wins else loses always.
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGameEfficient = function (N){
    return N%2===0;
}

// Time Complexity : O(1)
// Space Complexity : O(1)