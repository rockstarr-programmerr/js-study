let name = 'Trung';
let age = 25;

let person = {
    name: 'Hieu',
    age: 23
}

let people = ['Hieu', 'Ha', 'Trung', 'Co Giao'];

/**
 * Output của những dòng dưới đây là gì?
 * Vì sao có sự khác nhau?
 */
name.toUpperCase();
console.log(name);

// => return: 'Trung' (chỉ thực hiện toUpperCase() nhưng chưa gán lại giá trị cho biến name => vẫn lấy giá trị ban đầu)

people.push('A.Linh');
console.log(people);

// return: ['Hieu', 'Ha', 'Trung', 'Co Giao', 'A.Linh']; push() => thêm phần tử vào cuối mảng, trả về một mảng mới có độ dài mới

let otherPerson = person;
otherPerson.name = 'Dien';
console.log(person);
console.log(otherPerson);

/**
 * return { name: 'Dien', age: 23 }
 * person và otherPerson đều tham chiếu đến 1 value
 */
