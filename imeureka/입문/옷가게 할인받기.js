/** 
 * 1. 삼항연산자 나도 이렇게 써보는 연습.
 *    price = price>=500000?price*0.8:price>=300000?price*0.9:price>=100000?price*0.95:price;
 *    return ~~(price);
 */
function solution(price) {
	let answer = 0;
	let salePrice = 0;
	if (price >= 100000 && price < 300000) {
		salePrice = price * 0.05;
		return parseInt(price - salePrice);
	} else if (price >= 300000 && price < 500000) {
		salePrice = price * 0.1;
		return parseInt(price - salePrice);
	} else if (price >= 500000) {
		salePrice = price * 0.2;
		return parseInt(price - salePrice);
	} else {
		return price;
	}
}

