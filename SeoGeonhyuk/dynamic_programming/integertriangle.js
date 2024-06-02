let answer = 0;
function maxPathCalculator(floorArray, arrays){
    if(arrays.length === 0){
        floorArray.forEach((num) => {
            if (answer <= num)
                answer = num;
        })
    }
    else{
        const partArray = arrays.shift();
        const futureFloorArray = new Array(partArray.length).fill(0);
        for(let i = 0; i < floorArray.length; i++){
            const possiblePathSum = floorArray[i] + partArray[i];
            if(possiblePathSum > futureFloorArray[i])
                futureFloorArray[i] = possiblePathSum;
            if(i + 1 < partArray.length)
                futureFloorArray[i + 1] = (floorArray[i] + partArray[i + 1]);
        }
        maxPathCalculator(futureFloorArray, arrays);
    }
}
function solution(triangle) {
    const oldSum = triangle[0][0];
    triangle.shift();
    maxPathCalculator([oldSum], triangle);
    return answer;
}
