/**
 * 1. filter이용
 *     return [0, 90, 91, 180].filter(x => angle>=x).length;
 * 2. 삼항연산자 이용
 *     return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
 */
function solution(angle) {
	switch (angle) {
		case 90:
			return 2;
		case 180:
			return 4;
		default:
			return angle > 0 && angle < 90 ? 1 : 3;
	}
}
