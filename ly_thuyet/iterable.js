/**
 * Phần 1
 */
const numbers = [1, 2, 3];

// Những đoạn code dưới đây in ra gì? (đoán trước rồi chạy thử)
for (const i of numbers) {
    console.log(i);
}

for (const i in numbers) {
    console.log(i);
}

for (const i of 'abcd') {
    console.log(i);
}


/**
 * Phần 2: những hàm thao tác với array thông thường
 */

// Tìm hiểu, chạy thử, tóm tắt lại ý nghĩa, cách dùng của những hàm sau:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => {
    console.log(number);
})

const multipliedNumbers = numbers.map(number => number * 2);
console.log(multipliedNumbers);

const bigNumbers = numbers.filter(number => number > 5);
console.log(bigNumbers);

const number8 = numbers.find(number => number === 8);
console.log(number);

const notExistNumber = numbers.find(number => number === 100);
console.log(notExistNumber);


/**
 * Phần 3: loop qua key, value của 1 object
 */
const obj = {
    amazing: 'goodjob',
    coding: 'is fun',
}

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
