// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a + b;
}

sum1(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 최종적으로, 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}

sum(10, 20);

// 함수의 옵셔널 파라미터, ?를 넣음으로 더 유연하게 사용 가능
function log(a: string, b?: string) {

}
log('Hello World');
log('hello ts', 'abc');