console.log(taewoo) // undefined
var taewoo = '김태우'

/*
var taewoo // hoisting
console.log(taewoo)
taewoo = '김태우'
*/

console.log(kyungho) // ReferenceError - 초기화 하기전 접근 X
let kyungho = '이경호'

/*
var
1. 선언과 동시에 초기화
2. 할당

let, const 는 TDZ(Temporal Dead Zone) 이 존재

1. 선언
2. TDZ
3. 초기화
4. 할당
*/