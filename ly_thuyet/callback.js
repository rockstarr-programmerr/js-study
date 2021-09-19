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

// callAPI(123, onFinish)

/**
 * Câu hỏi 1: Khi chạy hàm `callAPI`, điều gì sẽ xảy ra?
 * Sau 2s thì sẽ chạy hàm onFinish
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
//   setTimeout(() => {
//     console.log('API 1 DONE!')
//   }, 1000)
// }
// function api_2() {
//   setTimeout(() => {
//     console.log('API 2 DONE!')
//   }, 2000)
// }
// function api_3() {
//   setTimeout(() => {
//     console.log('API 3 DONE!')
//   }, 3000)
// }

// function callApi(a, b, c) {
//   setTimeout(a, 1000)
//   setTimeout(b, 3000)
//   setTimeout(c, 6000)
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

const randomNumber = (array) => {
  const number = Math.floor(Math.random() * array.length);
  return array[number];
}

const randomTime = () => {
  return randomNumber([1, 2, 3, 4]) * 1000;
}

const api1 = (cb) => {
  const randomTimeApi = randomTime();
  setTimeout(() => {
    const result = randomNumber([1, 2, 3, 4]);
    console.log(`api 1 ket qua ${result} thoi gian ${randomTimeApi}s`);
    cb(result);
  }, randomTimeApi);
}

const api2 = (api1_res, cb) => {
  const randomTimeApi = randomTime();
  setTimeout(() => {
    const number = randomNumber([5, 6, 7, 8]);
    console.log(`so api 2 => ${number}`);
    const result = api1_res + number;
    console.log(`api 2 ket qua ${result} thoi gian ${randomTimeApi}s`);
    cb(result);
  }, randomTimeApi);
}

const api3 = (api2_res) => {
  const randomTimeApi = randomTime();
  setTimeout(() => {
    const number = randomNumber([9, 10, 11, 12]);
    console.log(`so api 3 => ${number}`);
    const result = api2_res + number;
    console.log(`api 3 ket qua ${result} thoi gian ${randomTimeApi}s`);
  }, randomTimeApi);
}

const call = (api1_res) => {
  api2(api1_res, api3)
}

api1(call);
