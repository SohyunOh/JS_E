// 1.'use strict';
//바닐라 스크립트 에서 사용 , ecmascript5 에 정의 되어있음. 
//유연한 만큼 문법에 맞지 않아도 사용이 가능하지만 위험하기 때문
'use strict';

//2. Variable (변수)
// let (added in ES6)
let globalName = 'global name'; // 글로버 스코프는 어디에서나 접근 가능 
// 어플리케이션이 시작한 순간부터 항상 메모리 할당된 상태
{ //블록안에서만 할당다능 
    let name = 'ju';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (ES5 문법, Don't ever uer this!)
//값을 할당 하기도 전에 쓸수 있음... var hoising
//has no block scope
{
console.log(age);
age =4;
console.log(age);
var age;
}
console.log(age);


//3. Contants (const) <-> Mutable (let)
// favor immutable data type always for a few reasons 한번 할당하면 값이 바뀌지 않음
// - security 보안
// - thread safety 스레드 안정성
// - reduce human mistakes 실수 줄이기 
const daysInweek = 7;
const maxNumber = 5;


// 4. variable types (프리비티 타입 primitive  , 오프젝트 타입 object )
// primitive, single itme: number,string, boolean, null , undefinedn, symbol
// object, box container (single itme 를 묶어서 한다위로 관리)
// function, first-class function (function도 다른 언어에 할당이 가능 함수의 파라미터를 인자값으로 전달가능, 함수의 리턴 값을 전달 가능)
const count = 17; // integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

// number - speicle numeric values: infinity, - infinity ,NaN
const infinity  = 1 / 0; 
const negativeinfinity  = -1 / 0;
const nAn = 'not a numver' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);


//5. bigInt( fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over ((-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type : ${typeof bigInt}`);

//6. String
const char = 'c';
const brendan = 'brendan';
const greetiong = 'hello ' + brendan ;
console.log (`value: ${greetiong} , type: ${typeof greetiong}`) 
const helloBob = `hi ${brendan}!`; // template literals (string) => 백티를 이용 `` 
console.log (`value: ${helloBob} , type: ${typeof helloBob}`)
console.log ('value: '+ helloBob + ' type: ' + typeof helloBob);
