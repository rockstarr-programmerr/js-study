/**
 * "module" và "script"
 * Script: <script src="..."></script>
 * Module: <script src="..." type="module"></script>
 *
 * Script thì ko có import, export
 * Module thì có import, export
 * Phần lớn ko cần quan tâm đến cái này, vì thường là sử dụng webpack,
 * nhưng cũng nên hiểu bản chất
 */


/**
 * Export, import
 */

/////////////////////////////////////////////////////////////////
// Export ngay khi khai báo
export const number = 100;
export const fun = true;
export class Person {}

import { number, fun, Person } from '...';

/////////////////////////////////////////////////////////////////
// Export sau khi khai báo
const number = 100;
const fun = true;
class Person {}

export {
    number,
    fun as is_fun,  // export kèm theo đổi tên
    Person as PersonClass  // export kèm theo đổi tên
}

import {
    number,
    is_fun,
    PersonClass as Developer // import kèm theo đổi tên
} from '...';

/////////////////////////////////////////////////////////////////
// Export mặc định
export default {
    language: 'vuejs',
    difficulty: 5,
}

import Language from '...';

// Export 1 member mặc định và nhiều member khác
const number = 100;
const fun = true;

export default {
    language: 'python',
    difficulty: 7,
}

import Language, { number, fun } from '...';

// Câu hỏi: export mặc định có nhược điểm gì?


/**
 * Module gồm nhiều file
 *
 * Bình thường, mỗi file .js gọi là 1 module
 *
 * Nhưng nếu có 1 folder, trong đó có 1 file index.js, và nhiều file .js khác, thì cả folder đó coi như là 1 module
 *
 * VD:
 * some/path/my_lib/index.js
 * some/path/my_lib/const.js
 * some/path/my_lib/func.js
 * some/path/my_lib/utils/datetime.js
 * some/path/my_lib/utils/math.js
 *
 * => import MyLib from 'some/path/my_lib'
 */


/**
 * Nodejs
 *
 * Cú pháp mô tả bên trên là dùng cho môi trường web
 *
 * Còn trên môi trường nodejs, phải dùng:
 * module.exports
 * require
 */

/////////////////////////////////////////////////////////////////
// Có thể export bất cứ cái gì
module.exports = 'Hello internet'

const msg = require('...');
console.log(msg)  // "Hello internet"

/////////////////////////////////////////////////////////////////
// Thông thường là export object
const number = 100;
const fun = true;
class Person {};

module.exports = {
    number,
    fun,
    PersonClass: Person
}

const allModule = require('...');
console.log(allModule.number);

const { number, fun, PersonClass } = require('...');

/////////////////////////////////////////////////////////////////
// module.exports là 1 object, nên có thể thao tác với nó như 1 object thông thường
module.exports = {
    number,
    fun
}

class Person {};
module.exports.Person = Person;  // Hoặc "exports.Person = Person"

const { number, fun, Person } = require('...');
