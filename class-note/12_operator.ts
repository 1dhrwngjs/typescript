
// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// Union Type, (string + number)
var seho: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value == 'number') {
        value.toLocaleString();
    }
    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone0(someone: Developer | Person) {
    // someone.name
    // someone.skill //error
    // someone.age //error
}
askSomeone0({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone0({ name: '캡틴', age: 100});

//인터섹션 타입을 이용함으로 참조가 가능하게 된다. (C: A & B)
function askSomeone(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });
// askSomeone({ name: '캡틴', age: 100 }); //error

// var seho: string | number | boolean;
// var capt: string & number & boolean;