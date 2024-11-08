
// 1. [Readline 모듈 가져오기]
// 2. [readline 인터페이스 생성]
// input, ouput은 "standard input/output",
// 사용자로부터 입력을 받을 수 있는 기본 입력 채널
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

// 3. [이벤트는 사용자가 Enter 키를 눌렀을 때 발생]
// 4. [close 이벤트는 readline 인터페이스가 close 이벤트를 감지할 때마다 실행되는 콜백 함수를 정의합니다.]
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
   const n = Number(input[0]);
    for(let i = 1; i<=n; i++){
        console.log("*".repeat(i))
    }
});