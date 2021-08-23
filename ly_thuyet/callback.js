/**
 * Hàm callback được truyền vào 1 hàm khác, và được gọi trong hàm đó
 */

// function onFinish (text) {
//     console.log('Finished!!');
//     console.log(text)
// }

// function callAPI (params, callback) {
//     setTimeout(function () {
//         callback('Amazing goodjob.')
//     }, 2000);
// }

/**
 * Câu hỏi 1: Khi chạy hàm `callAPI`, điều gì sẽ xảy ra?
 * Sau 2 dây thì sẽ chạy hàm onFinish
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

// function api_1() {
//   console.log('API 1 DONE!')
// }
// function api_2() {
//   console.log('API 2 DONE!')
// }
// function api_3() {
//   console.log('API 3 DONE!')
// }

// function callApi(api_1, api_2, api_3) {
//   setTimeout(() => {
//     api_1()
//   }, 1000);

//   setTimeout(() => {
//     api_2()
//   }, 3000);
  
//   setTimeout(() => {
//     api_3()
//   }, 6000);
// }

// callApi(api_1, api_2, api_3);

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
function api_1() {
  let arr = [1, 2, 3, 4];
  let key = Math.floor(Math.random() * arr.length);
  let result = arr[key];
  console.log(`So ngau  nhien: ${result}`);
  return result;
}
function api_2() {
  let number_api_1 = api_1();
  let arr = [5, 6, 7, 8];
  let key = Math.floor(Math.random() * arr.length);
  let result = arr[key];
  console.log(`Ket qua api 2: ${number_api_1} + ${result} = `, number_api_1 + result);
  return number_api_1 + result;
}
function api_3() {
  let number_api_2 = api_2();
  let arr = [9, 10, 11, 12];
  let key = Math.floor(Math.random() * arr.length);
  let result = arr[key];
  console.log(`Ket qua api 3: ${number_api_2} + ${result} = `, number_api_2 + result);
}
function test() {
  setTimeout(api_3, 1000);
}

test();