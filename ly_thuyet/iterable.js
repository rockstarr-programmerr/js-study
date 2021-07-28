/**
 * Phần 1
 */
const numbers = [1, 2, 3];

// Những đoạn code dưới đây in ra gì? (đoán trước rồi chạy thử)
for (const i of numbers) {
    console.log(i);
}

// 1, 2, 3, 4 (trả về value).

for (const i in numbers) {
    console.log(i);
}
// 0, 1, 2, 3 (trả về index).

for (const i of 'abcd') {
    console.log(i);
}

// a, b, c, d (trả về các chữ cái trong chuỗi).


/**
 * Phần 2: những hàm thao tác với array thông thường
 */

// Tìm hiểu, chạy thử, tóm tắt lại ý nghĩa, cách dùng của những hàm sau:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => {
    console.log(number);
})

// Duyện qua từng phần tử có trong mảng.

const multipliedNumbers = numbers.map(number => number * 2);
console.log(multipliedNumbers);

/* Duyệt qua phần tử trong mảng, trả về một mảng với value mới. 
=> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
*/

const bigNumbers = numbers.filter(number => number > 5);
console.log(bigNumbers);

/* Duyệt quả các phần tử của mảng, trả về một mảng mới với các value thỏa mãn điều kiện. 
=> [6, 7, 8, 9, 10]
*/

const number8 = numbers.find(number => number === 8);
console.log(number8);

/* Trả về value thỏa mãn điều kiện
- Nếu thỏa mãn => return value
- Nếu không có value => return undefined
- Nếu có 2 value trùng giá trị => return value đầu tiên
=> 8
*/

const notExistNumber = numbers.find(number => number === 100);
console.log(notExistNumber);

/**
 * => undefined (value không tồn tại trong mảng)
 */


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

/**
 * Object.entries => return key, value of object => array [key, value]
 * => amazing, goodjob
 * => coding, is fun
 */