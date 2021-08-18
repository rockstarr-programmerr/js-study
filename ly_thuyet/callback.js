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
