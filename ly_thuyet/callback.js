/**
 * Hàm callback được truyền vào 1 hàm khác, và được gọi trong hàm đó
 */

 function onFinish (text) {
    console.log('Finished!!');
    console.log(text)
}

function callAPI (params, callback) {
    setTimeout(function () {
        callback('Amazing goodjob.')
    }, 2000);
}

/**
 * Câu hỏi 1: Khi chạy hàm `callAPI`, điều gì sẽ xảy ra?
 * 2s sau sẽ chạy vào hàm callback
 */

/**
 * Câu hỏi 2: Viết code cho tình huống sau (giả lập những chỗ gọi API bằng hàm `setTimeout` giống bên trên):
 * - Ta có những API sau:
 *      + API_1: chạy hết 1 giây
 *      + API_2: chạy hết 2 giây
 *      + API_3: chạy hết 3 giây
 * - Việc cần làm:
 *      + Gọi API_1, sau đó console.log('API_1 done')
 *      + Gọi API_2, sau đó console.log('API_2 done')
 *      + Gọi API_3, sau đó console.log('API_3 done')
 * - Kết quả kỳ vọng:
 *      + Sau 1 giây, console hiện 'API_1 done'
 *      + Sau 3 giây, console hiện 'API_2 done'
 *      + Sau 6 giây, console hiện 'API_3 done'
 */
 function API_1 () {
    setTimeout(function () {
        console.log('Finished!!');
        console.log('API_1 done')
    }, 1000);
}

function API_2 () {
    setTimeout(function () {
        console.log('Finished!!');
        console.log('API_2 done')
    }, 2000);
}

function API_3 () {
    setTimeout(function () {
        console.log('Finished!!');
        console.log('API_2 done')
    }, 3000);
}

function callAPIQuestionTwo () {
    API_1()
    API_2()
    API_3()
}

callAPIQuestionTwo()
/**
 * Câu hỏi 3: Viết code cho tình huống sau:
 * - Ta có những API sau:
 *      + API_1: trả ra ngẫu nhiên 1 trong các số: 1, 2, 3, 4
 *      + API_2: lấy kết quả của API_1, cộng với ngẫu nhiên 1 trong các số: 5, 6, 7, 8
 *      + API_3: lấy kết quả của API_2, cộng với ngẫu nhiên 1 trong các số: 9, 10, 11, 12
 * - Việc cần làm:
 *      + Gọi API_1, log ra kết quả
 *      + Gọi API_2, log ra kết quả
 *      + Gọi API_3, log ra kết quả
 */
 function API_1 () {
    let array = [1, 2, 3, 4];
    let getKey = Math.floor(Math.random() * nums.length);
    let result = array[getKey];
    console.log(`So Ngau  Nhien :${result}`);
    return result;
}

function API_2 (getDataApiOne) {
    let array = [5, 6, 7, 8]
    let getKey = Math.floor(Math.random() * array.length)
    let result = array[getKey] + getDataApiOne
    console.log(`So Ngau  Nhien :${result}`);
    return result
}

function API_3 (getDataApiTwo) {
    let array = [9, 10, 11, 12]
    let getKey = Math.floor(Math.random() * array.length)
    let result = array[getKey] + getDataApiTwo
    console.log(`So Ngau  Nhien :${result}`);
    return result
}

function callAPIQuestionThree () {
    API_1();
    let  getDataApiOne =  API_1();
    API_2(getDataApiOne);
    let  getDataApiTwo =  API_2();
    API_3(getDataApiTwo);
}

callAPIQuestionThree()