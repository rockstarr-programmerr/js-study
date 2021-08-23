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
 */ hàm `callAPI`sẽ đợi 1 khoảng thời gian (2000 mili giây) rồi mới chạy. 

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
        console.log('Finished!!');
        console.log('API_1 done');
    }
    functionPAI_2 () {
        console.log('Finished!!');
        console.log('API_2 done');
    }
    function API_3 () {
        console.log('Finished!!');
        console.log('API_3 done');
    }

    function callAPI (callAPI_1, callAPI_2, callAPI_3) {
        setTimeout(function () {
            callAPI_1()
        }, 1000);

        setTimeout(function () {
            callAPI_2()
        }, 2000);

        setTimeout(function () {
            callAPI_3()
        }, 3000);
    }

    // e thấy dùng cách viết dưới này ngắn gọn code hơn ạ.
    function API_1() {
        alert('Finished!!');
        alert('API_1 done');
      }
      setTimeout(API_1, 1000);

      function API_2() {
        alert('Finished!!');
        alert('API_2 done');
      }
      setTimeout(API_2, 2000);
      
      function API_3() {
        alert('Finished!!');
        alert('API_3 done');
      }
      setTimeout(API_3, 3000);
    
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


