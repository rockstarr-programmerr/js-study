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
