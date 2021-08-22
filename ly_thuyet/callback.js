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
 * Khi chạy hàm 'callAPI' và truyền đủ 2 tham số params, callback thì sau 2 giây hàm onFinish sẽ được chạy
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
function api_1 () {
    console.log('Finished!!');
    console.log('API_1 done')
}

function api_2 () {
    console.log('Finished!!');
    console.log('API_2 done')
}

function api_3 () {
    console.log('Finished!!');
    console.log('API_3 done')
}

function callAPI (callAPI1, callAPI2, callAPI3) {
    setTimeout(function () {
        callAPI1()
    }, 1000);

    setTimeout(function () {
        callAPI2()
    }, 2000);

    setTimeout(function () {
        callAPI3()
    }, 3000);
}

// callAPI(api_1, api_2, api_3)


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

function api_1 () {
    let nums = [1, 2, 3, 4]
    let randomIndex = Math.floor(Math.random() * 4)
    let result = nums[randomIndex]
    console.log('Result of Api 1 is: ', result)
    console.log('------------------------------')
    return result
}

function api_2 (num) {
    let nums = [5, 6, 7, 8]
    let randomIndex = Math.floor(Math.random() * 4)
    let result = nums[randomIndex] + num
    console.log('Result of Api 1 is: ', num)
    console.log('Random number of Api 2 is: ', nums[randomIndex])
    console.log('Result of Api 2 is: ', result)
    console.log('------------------------------')
    return result
}

function api_3 (num) {
    let nums = [9, 10, 11, 12]
    let randomIndex = Math.floor(Math.random() * 4)
    let result = nums[randomIndex] + num
    console.log('Result of Api 2 is: ', num)
    console.log('Random number of Api 3 is: ', nums[randomIndex])
    console.log('Result of Api 3 is: ', result)
    console.log('------------------------------')
    return result
}

function callAPI (callAPI1, callAPI2, callAPI3) {
    let numberOfAPI1, numberOfAPI2
    setTimeout(function () {
        numberOfAPI1 = callAPI1()
    }, 1000);

    setTimeout(function () {
        numberOfAPI2 = callAPI2(numberOfAPI1)
    }, 2000);

    setTimeout(function () {
        callAPI3(numberOfAPI2)
    }, 3000);
}

callAPI(api_1, api_2, api_3)
