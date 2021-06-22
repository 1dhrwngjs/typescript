// JS 문자열 선언 방식
// var str = 'hello';
// TS 문자열 선언 방식 , 이 변수는 문자열이다
var str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3];
//만약 정수가 들어갔는데 밑줄이 안쳐질시 esLint, tsLint 플러그인 설치
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']//, 10]

// TS 튜플, 배열의 각각 인덱스에 타입이 정의 되어있는 것
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'capt',
    age: 100
};
let person1: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;
