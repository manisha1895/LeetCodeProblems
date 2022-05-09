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

function closestMeetingPoint(matrix){
    let xIndices = [];
    let yIndices = [];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]){
                xIndices.push(i);
                yIndices.push(j);
            }
        }
    }
    xIndices.sort((a,b) => a-b);
    yIndices.sort((a,b) => a-b);

    console.log('Closest Meeting Point',xIndices[Math.floor(xIndices.length/2)],yIndices[Math.floor(yIndices.length/2)]);
}

const matrix = makeMatrix(3,3,0,0,1,1,1,1,0,0,1);
console.log(matrix);
closestMeetingPoint(matrix);

