function searchIn2DMatrix(matrix, value){
    let i = 0, j = matrix[0].length-1;
    while(i < matrix.length && j >= 0){
        if(matrix[i][j] === value){
                console.log('found',value,'at',i,j);
                return;
        }
        if(matrix[i][j] > value){
            --j;
        } else {
            ++i;
        }
    }
    console.log('not found',value);
}


function makeMatrix(rowNum = 0,colNum = 0, ...elements){
    if(elements.length !== rowNum*colNum){
       throw new Error('Invalid input for matrix'); 
    }
    const matrix = new Array();
    let k = 0;
    for(let i=0; i< rowNum; i++){
        matrix[i] = new Array();
        for(let j=0; j< colNum; j++){
            matrix[i][j] = elements[k];
            ++k;
        }    
    }
    return matrix;
}

const matrix = makeMatrix(2,3,1,2,3,4,5,6);
// console.log(matrix);
searchIn2DMatrix(matrix,7);



