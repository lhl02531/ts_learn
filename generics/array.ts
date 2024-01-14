function createArray<T>(length: number, value: T): Array<T>{
    let result: T[] = []
    for(let i = 0; i < length; i++){
        result.push(value)
        // result.push(1)
    }
    return result
}

// 类型推论
const arr1 = createArray(3, 'x')
console.log('arr1:', arr1)

// 指定类型
const arr2 = createArray<string>(3, 'x')
// const arr2 = createArray<string>(3, 3)
console.log('arr2:', arr2)

// 定义多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]