//필터 예시
let arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'sarah' },
    { gender: 'male', name: 'bone' },
];

let filtered = arr.filter(function (item) {
    if (item.gender == 'female') {
        return item;
    }
});

console.log(filtered);
//node ex.js를 돌렸을 시, 결과 값: [ { gender: 'female', name: 'sarah' } ]