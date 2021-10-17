/**
 * Câu hỏi 1: JS là đồng bộ hay bất đồng bộ?
 * JS là cả đồng bộ và bất đồng bộ.
 * Bất đồng bộ xảy ra khi dùng các hàm như setTimeout, setInterval, fetch,....
 */

/* -------------------------------------------------------------------------------- */
const promise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve('hello');
        }, 2000)
    } catch (error) {
        reject(error);
    }
})


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

/* -------------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------------- */
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
    }).catch(error => {
        console.log(error)
    })
