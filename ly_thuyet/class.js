/**
 * Nắm chắc các khái niệm liên quan đến class như sau:
 * - attribute/property (thuộc tính)
 * - method (phương thức/hàm)
 * - member (đề cập đến cả thuộc tính và phương thức)
 * - getter
 * - setter
 * - instance
 * - static member
 * - extend/inherit (thừa kế)
 * - super/superclass (đề cập đến class cha)
 * - subclass (đề cập đến class con)
 * - Mixin
 */

class Person {
    /**
     * Constructor là hàm được gọi khi khởi tạo class bằng từ khóa `new`
     * Tất cả các hàm trong 1 class (trừ hàm static) đều có sẵn từ khóa `this`, chính là 1 instance của class
     * Hàm constructor sẽ nhận các biến truyền vào, khởi tạo các thuộc tính của class bằng cách gắn vào `this`
     */
    constructor (name, age, company) {
        /**
         * Attribute/property (thuộc tính) là các biến được gắn vào instance của class
         */
        this.name = name;
        this.age = age;
        this.company = company;
        this.oldCompanies = [];
    }

    /**
     * Method (phương thức/hàm)
     */
    logNameToConsole () {
        console.log(this.name);
    }

    /**
     * getter là hàm sẽ được chạy mỗi khi lấy giá trị của thuộc tính
     * VD, hàm ở dưới đây sẽ chạy mỗi khi mình viết: `const birthYear = person.birthYear`
     * Câu hỏi: vậy getter khác gì với 1 method bình thường?
     */
    get birthYear () {
        const currentYear = (new Date).getFullYear();
        const birthYear = currentYear - this.age;
        return birthYear;
    }

    /**
     * setter là hàm sẽ được chạy mỗi khi gán giá trị cho thuộc tính
     * VD, hàm dưới đây sẽ chạy mỗi khi mình viết `person.company = "Newwave"`
     */
    set company (company) {
        this.oldCompanies.push(company);
    }

    /**
     * Thuộc tính static và hàm static
     * Nếu như các thuộc tính, hàm bình thường luôn gắn liền với 1 instance (nghĩa là mỗi instance khác nhau
     * thì thuộc tính, hàm đó trả ra kết quả khác nhau), thì thuộc tính, hàm static không gắn liền với instance nào cả.
     * Do đó, đã static thì phải gọi từ class, ko thể gọi từ instance.
     * VD:
     * Person.legCount;  // Đúng, trả ra 2
     * Person.sayHello();  // Đúng, log ra "Hello"
     *
     * const hieu = new Person('Hieu', 24, 'Newwave');
     * hieu.legCount;  // Sai
     * hieu.sayHello();  // Sai
     */
    static legCount = 2
    static sayHello () {
        console.log('Hello');
    }
}


/**
 * Extend/inherit (thừa kế)
 * Khi class B thừa kế class A, thì B có mọi member của A
 * Ngoài ra B có thể định nghĩa thêm member của mình, ghi đè 1 member của A.
 */

class Developer extends Person {
    constructor (name, age, company, language, yearExp) {
        /**
         * constructor của class con có thể gọi constructor của class cha qua từ khóa `super`
         */
        // Khởi tạo các thuộc tính giống như `Person`
        super(name, age, company);

        // Thêm các thuộc tính của riêng `Developer`
        this.language = language;
        this.yearExp = yearExp;
    }

    /**
     * Ghi đè 1 member của class cha
     */
    logNameToConsole () {
        // Trong class con có thể gọi 1 method của class cha qua từ khóa `super`
        const name = super.logNameToConsole();
        console.log('Developer: ', name);
    }

    /**
     * Thêm 1 member mới
     */
    work (coffee) {
        const code = magic(coffee);
        return code;
    }
}


/**
 * Mixin:
 * Một số ngôn ngữ (như Python) cho phép 1 class con thừa kế từ nhiều class cha (multi-inheritance)
 * VD trong Python:
 * class A(B, C, D):
 *      ...
 * => class A thừa kế từ cả B, C và D
 *
 * Trong JS thì ko trực tiếp làm được như vậy:
 * class A extends B extends C extends D {
 *      ...
 * }
 * => Không được!
 *
 * Do đó, sinh ra mixin
 * Mixin thực ra là một cách viết khéo léo để làm cho "có vẻ như" đang thừa kế từ nhiều class
 * Mixin là một hàm, nó nhận vào class X, và trả ra class Y thừa kế từ class X đó
 */

/**
 * Ví dụ:
 * "Toán học" dùng cho "Vật lý" và "Hóa học"
 * "Vật lý" và "Hóa học" kết hợp lại là "Khoa học tự nhiên"
 * "Vật lý" lại còn có thể dùng cho "Khoa học máy tính" (nhưng "Hóa học" thì không)
 * => Có thể mô hình hóa bài toán trên thành class, mixin như sau:
 */

class ToanHoc {
    // Những thứ liên quan đến toán học trong này
};

VatLyMixin = BaseClass => class extends BaseClass {
    // Những thứ liên quan đến vật lý trong này
};

HoaHocMixin = BaseClass => class extends BaseClass {
    // Những thứ liên quan đến hóa học trong này
};

class KhoaHocTuNhien extends VatLyMixin(HoaHocMixin(ToanHoc)) {
    // Khoa học tự nhiên
};

class KhoaHocMayTinh extends VatLyMixin(ToanHoc) {
    // Khoa học máy tính
};
