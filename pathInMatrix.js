function pathExists(matrix,i,j,visited){
    if(i< 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || visited[i][j] || matrix[i][j]===3){
        return false;
    }

    visited[i][j] = true;
    if(matrix[i][j] === 2){
        return true;
    }

    // go up
    const pathExistsUp = pathExists(matrix,i-1,j,visited);

    // go right
    const pathExistsRight = pathExists(matrix,i,j+1,visited);

     // go down
    const pathExistsDown = pathExists(matrix,i+1,j,visited);

    
     // go left
    const pathExistsLeft = pathExists(matrix,i,j-1,visited);

    return pathExistsUp || pathExistsRight || pathExistsDown || pathExistsLeft;
}

function pathInMatrix(matrix){
    const visited = makeMatrix(matrix.length,matrix[0].length,...new Array(matrix.length*matrix[0].length).fill(false));
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 1){
                return pathExists(matrix,i,j,visited);
            }
        }
    }
    return false;
}

function makeMatrix(row,col,...elements){
    if(elements.length !== row*col){
        throw new Error('Bad input');
    }
    const matrix = new Array();
    let k = 0;
    for(let i=0;i<row;i++){
        matrix[i] = new Array();
        for(let j=0;j<col;j++){
            matrix[i][j] = elements[k];
            ++k;
        }
    }
    return matrix;
}


// 0 is free
// 1 is source
// 2 is destination
// 3 is blocked
const matrix = makeMatrix(3,3,1,3,3,0,0,0,3,2,3);
console.log(matrix);
pathInMatrix(matrix)