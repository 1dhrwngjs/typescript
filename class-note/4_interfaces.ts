//간단하게 인터페이스를 활용하는 방법
interface User {
  age: number;
  name: string;
}

//변수에 interface 활용, 'seho'란 변수는 'User'란 interface type이 정의 되었다고 볼 수 있음.
var seho: User = {
  age: 33,
  name: '세호'
}

//함수에 interface 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 100,
  name: '캡틴'
}
getUser(capt);

// 함수의 구조(스펙)에 interface 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱,
// 위의 코드처럼 정의했던 방식과는 다르다, 'StringArray'라고 하는 속성이 속성 이름이 정해져 있지 않고 'StringArray'를 가져다 사용할때마다 임의로 부여해서 사용할 수 있는 방식
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10; // error

// 딕셔너리 패턴, 위 인덱싱 방식과 유사하다.
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,

  //.css 확장자를 가지고 있는 모든 파일을 가져오는 정규식
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' //error

//이 안에 들어오는 값들에 대한 정의가 되었음 (추론이라 표현 함)
Object.keys(obj).forEach(function(value) {});

// interface 확장, 인터페이스를 상속받아서 기존에 있었던 것 보다 더욱 확장해서 사용할 수 있는 것
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  // 위에 Person을 상속 받았으므로, 중복되는 아래 코드 두줄은 필요 없어진다.
  // name: string;
  // age: number;
  language: string;
}

var captain: Developer = {
  age: 100,
  name: '캡틴',
  language: 'ts'
}