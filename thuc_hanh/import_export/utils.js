const number = 100;
const fun = true;
class Person {}

export {
    number,
    fun as is_fun,  // export kèm theo đổi tên
    Person as PersonClass  // export kèm theo đổi tên
}

// export default 'hello'


export default {
    data: () => {
        return {
            x: 1,
            y: 2
        }
    },
    methods: {

    }
}
