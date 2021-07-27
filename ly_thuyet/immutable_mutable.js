let name = 'Trung';
let age = 25;

let person = {
    name: 'Hieu',
    age: 23
}

let people = ['Hieu', 'Ha', 'Trung', 'co giao'];

/**
 * Output của những dòng dưới đây là gì?
 * Vì sao có sự khác nhau?
 */
name.toUpperCase();
console.log(name);

people.push('A.Linh');
console.log(people);

let otherPerson = person;
otherPerson.name = 'Dien';
console.log(person);
console.log(otherPerson);
