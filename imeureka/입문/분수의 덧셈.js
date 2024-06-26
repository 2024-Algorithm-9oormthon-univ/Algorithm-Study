/**
 * 1. 최대공약수를 구하는 식 : getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
 * 2. 처음에 denom3에 같은 분모를 또 더해 오류가 났다
 * 3. 약분하여 리턴해준다
 */
function solution(numer1, denom1, numer2, denom2) {
	const numer3 = numer1 * denom2 + numer2 * denom1;
	const denom3 = denom1 * denom2;

	const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
	const gcd = getGcd(numer3, denom3); 
	return [numer3 / gcd, denom3 / gcd]; 
}