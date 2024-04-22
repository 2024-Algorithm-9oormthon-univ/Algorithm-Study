function solution(brown, yellow) {
    var answer = null;
    for(let i = 1; i <= Math.ceil(Math.sqrt(yellow)); i++){
        const divideResult = yellow / i;
        if(Number.isInteger(divideResult)){
            const possibleWidthAndHeight = {
                width: divideResult,
                height: i
            };
            if(brown === ((possibleWidthAndHeight.width + 2) * 2 + (possibleWidthAndHeight.height + 2) * 2 - 4)){
                return [possibleWidthAndHeight.width + 2, possibleWidthAndHeight.height + 2]
               }
        }
    }
}
