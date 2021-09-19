/**
 * Đồng bộ và bất đồng bộ (synchronous, asynchronous)
 *
 * Đồng bộ là chạy lần lượt từng công việc. VD: việc A chạy xong, mới bắt đầu việc B
 * Bất đồng bộ là chạy nhiều công việc cùng lúc. VD: bắt đầu việc A nhưng ko cần đợi hoàn thành, bắt đầu tiếp việc B luôn
 */

/**
 * Câu hỏi 1: JS là đồng bộ hay bất đồng bộ?
 * JS là cả đồng bộ và bất đồng bộ.
 * Bất đồng bộ xảy ra khi dùng các hàm như setTimeout, setInterval, fetch,....
 */


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
 * Sau khi hết 2 giây thì sẽ trả ra hai chuỗi là: "hello internet" và "This is always called"
 */

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
 * Sau khi hết 2 giây thì sẽ trả ra là: "hello my name is Trung" và "Done!"
 */

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
 * Sẽ trả ra là "hello world!"
 */

/**
 * VD ứng dụng trong Vuejs
 */
function loadDataFromAPI() {
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
 * CHÚ Ý: không copy paste đề bài vào bài làm của mình, thay vào đó hãy tự gõ lại để luyện tập
 * 
 * Cho 4 API như dưới đây.
 * Tương tự bài callback:
 * Hãy viết code để Api3 nhận kết quả của Api2, Api2 nhận kết quả của Api1
 */

// ----------------------------------------------------------------------------------
// Bài làm

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

function api1(){
    return new Promise(resolve => {
        setTimeout(() => {
        const api1Res = getRandomNumber([1, 2, 3, 4, 5])
        console.log("API 1 result is: ", api1Res)
        console.log("API 1 is done!")
        console.log("---------------------------")
        resolve(api1Res)
        }, getRandomTime())
    })
}

function api2(api1Res){
    return new Promise(resolve => {
        setTimeout(() => {
        const randomNumber = getRandomNumber([1, 2, 3, 4, 5])
        console.log('API 1 result is: ', api1Res)
        console.log('API 2 result is: ', randomNumber)
        const api2Res = api1Res + randomNumber
        console.log("Total number of API 1 and API 2 is: ", api2Res)
        console.log("API 2 is done!")
        console.log("---------------------------")
        resolve(api2Res)
        }, getRandomTime())
    })
}

function api3(api2Res){
    return new Promise(resolve => {
        setTimeout(() => {
        const randomNumber = getRandomNumber([1, 2, 3, 4, 5])
        console.log('API 2 result is: ', api2Res)
        console.log('API 3 result is: ', randomNumber)
        const api3Res = api2Res + randomNumber
        console.log("Total number of API 2 and API 3 is: ", api3Res)
        console.log("API 3 is done!")
        console.log("---------------------------")
        resolve()
        }, getRandomTime())
    })
}

api1()
    .then(api1Res => {
        return api2(api1Res)
    })
    .then(api2Res => {
        return api3(api2Res)
    })
    .then(() => {
        console.log('DONE!')
    })

// ------------------------------------------------------------------------------------------

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

/**
 * Promise.all
 */
