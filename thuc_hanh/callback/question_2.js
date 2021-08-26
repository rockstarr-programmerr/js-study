function API_1(callback) {
    setTimeout(() => {
        console.log('API_1 done')
        callback()
    }, 1000)
}

function API_2(callback) {
    setTimeout(() => {
        console.log('API_2 done')
        callback()
    }, 2000)
}

function API_3() {
    setTimeout(() => {
        console.log('API_3 done')
    }, 3000)
}

function callApi2Api3 () {
    API_2(API_3)
}

API_1(callApi2Api3)
