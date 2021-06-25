//간단하게 인터페이스를 활용하는 방법
interface User {
  age: number;
  name: string;
}

//'seho'란 변수는 'User'란 interface type이 정의 되었다고 볼 수 있음.
var seho: User = {
  age: 33,
  name: '세호'
}