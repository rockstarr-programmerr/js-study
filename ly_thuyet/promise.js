/**
 * Đồng bộ và bất đồng bộ (synchronous, asynchronous)
 * 
 * Đồng bộ là chạy lần lượt từng công việc. VD: việc A chạy xong, mới bắt đầu việc B
 * Bất đồng bộ là chạy nhiều công việc cùng lúc. VD: bắt đầu việc A nhưng ko cần đợi hoàn thành, bắt đầu tiếp việc B luôn
 */

/**
 * Câu hỏi 1: JS là đồng bộ hay bất đồng bộ?
 */
  Mang cả 2 tính chất đồng bộ và bất đồng bộ

/**
 * Event loop
 * 
 * Chủ đề này khó, nếu muốn mọi người có thể tìm hiểu trước, anh sẽ giải thích sau
 * 
 * http://latentflip.com/loupe/
 */


/**
 * Promise
 * 
 * Promise đại diện cho *kết quả* của 1 công việc sẽ được hoàn thành trong tương lai
 * *Kết quả* này có thể rơi vào 2 trường hợp:
 *      - Khi công việc thành công, *kết quả* là kết quả của công việc đó
 *      - Khi công việc thất bại, *kết quả* là lý do thất bại của công việc đó
 */

/**
 * Để khởi tạo promise, truyền vào constructor của class "Promise" 1 hàm như sau:
 *      - Nhận 2 biến là 2 hàm callback "resolve" và "reject"
 *      - Gọi hàm callback "resolve" khi công việc thành công
 *      - Gọi hàm callback "reject" khi công việc thất bại
 */
// VD:
const promise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve('hello');
        }, 2000)   
    } catch (error) {
        reject(error);
    }
})

/**
 * Cách sử dụng promise:
 * Gọi hàm .then() và truyền vào đó hàm callback xử lý trường hợp thành công
 * Gọi hàm .catch() và truyền vào đó hàm callback xử lý trường hợp thất bại
 * Gọi hàm .finally() và truyền vào đó hàm callback sẽ được gọi bất kể thành công hay thất bại
 */
// VD:
promise.then(result => {
    result += ' internet';
    console.log(result);
})

promise.catch(error => {
    console.error('Something failed!')
    console.error(error)
})

promise.finally(() => {
    console.log('This is always called.')
})

/**
 * Câu hỏi 2: VD trên sẽ in ra như thế nào?
 */
 hàm trả về 2 giá trị Something failed! và This is always called.
/**
 * Nối các callback (chaining)
 * 
 * Vì bản thân hàm .then, .catch, .finally cũng trả ra Promise,
 * nên có thể gọi chúng nối tiếp nhau
 */
// VD:
promise
    .then(result => {
        result += ' my name'
        return result
    })
    .then(result => {
        result += ' is Trung.'
        return result
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
        message = 'Oh no :('
        return message
    })
    .then(message => {
        console.error(message)
    })
    .finally(() => {
        console.log('Done!')
    })

/**
 * Câu hỏi 3: VD trên sẽ in ra như thế nào?
 */
in ra 3 giá tri: my name và is Trung. và Done! 

/**
 * CHÚ Ý:
 * Nếu callback của .then trả ra 1 kết quả thường, kết quả đó sẽ được bọc trong 1 promise
 * Nếu callback của .then trả ra 1 promise, promise đó sẽ được trả thẳng luôn (ko cần bọc nữa)
 */
// VD:
const promise2 = new Promise((resolve, reject) => {
    try {
        resolve(' world!')
    } catch (error) {
        reject(error)
    }
})

promise
    .then(result => {
        return promise2.then(result2 => {
            return result + result2
        })
    })
    .then(console.log)
    .catch(console.error)

/**
 * Câu hỏi 4: VD trên sẽ in ra như thế nào?
 */
in ra: world!
/**
 * VD ứng dụng trong Vuejs
 */
function loadDataFromAPI {
    if (this.loading) return  // Nếu đang loading thì ko cần làm gì, phòng trường hợp người dùng click đúp thì sẽ ko bị gọi API 2 lần
    this.loading = true  // Hiển thị loading

    this.$axios.get('some-api')
        .then(response => {
            // Nếu API trả về 200, gán kết quả API vào biến this.data
            this.data = response.data
        })
        .catch(error => {
            // Nếu API trả về khác 200 (VD: 400, 401, 403), hiển thị lỗi cho người dùng
            this.errors = error.response.data
        })
        .finally(() => {
            // Dù thành công hay thất bại thì đều dừng loading
            this.loading = false
        })
}

/**
 * Bài tập 2:
 * 
 * CHÚ Ý: không copy paste đề bài vào bài làm của mình, thay vào đó hãy 
 *tự gõ lại để luyện tập
 * 
 * Cho 4 API như dưới đây.
 * Tương tự bài callback:
 * Hãy viết code để Api3 nhận kết quả của Api2, Api2 nhận kết quả của Api1
 */

function getRandomNumber (choices) {
    const index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function getRandomTime () {
    return getRandomNumber([1, 2, 3, 4]) * 1000
}

function wait (ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function Api1 () {
    return new Promise((resolve, reject) => {
        try {
            wait(getRandomTime())
                .then(() => {
                    const result = getRandomNumber([1, 2, 3, 4])
                    console.log('Api1 result:', result)
                    resolve(result)
                })
        } catch (error) {
            reject(error)
        }
    })
}

function Api2 (api1Res) {
    return new Promise((resolve, reject) => {
        try {
            wait(getRandomTime())
                .then(() => {
                    const num = getRandomNumber([5, 6, 7, 8])
                    console.log('Api2 random number:', num)
                    const result = api1Res + num
                    console.log('Api2 result:', result)
                    resolve(result)
                })
        } catch (error) {
            reject(error)
        }
    })
}

function Api3 (api2Res) {
    return new Promise((resolve, reject) => {
        try {
            wait(getRandomTime())
                .then(() => {
                    const num = getRandomNumber([9, 10, 11, 12])
                    console.log('Api3 random number:', num)
                    const result = api2Res + num
                    console.log('Api3 result:', result)
                    resolve(result)
                })
        } catch (error) {
            reject(error)
        }
    })
}



function getRandomNumber (choices) {
    const index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function getRandomTime () {
    return getRandomNumber([1, 2, 3, 4]) * 1000
}

function API_1 (callback) {
    setTimeout(() => {
        const response = getRandomNumber([1, 2, 3, 4]);
        console.log('API 1:', response)
        callback(response);
    }, getRandomTime())
}

function API_2 (api1Res, callback) {
    setTimeout(() => {
        const number = getRandomNumber([5, 6, 7, 8]);
        console.log('API 2 random number:', number)
        const response = api1Res + number;
        console.log('API 2:', response);
        callback(response);
    }, getRandomTime())
}

function API_3 (api2Res) {
    setTimeout(() => {
        const number = getRandomNumber([9, 10, 11, 12]);
        console.log('API 3 random number:', number)
        const response = api2Res + number;
        console.log('API 3:', response)
    }, getRandomTime())
}

function callAPI2AndAPI3 (api1Res) {
    API_2(api1Res, API_3)
}

API_1(callAPI2AndAPI3)

/**
 * Promise.all
 */
