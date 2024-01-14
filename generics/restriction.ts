function restrictionTest<T>(a:T):T{
    // 当你使用 T.length 时，由于不确定泛型是那种类型，是否含有 length
    // console.log(T.length)
    return a
}

// 声明一个接口，含有 length 属性
interface Lengthwise {
    length: number;
}

// 让 T 继承 Lengthwise， 进行约束，使它必需要有 length 属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// loggingIdentity(122) 

loggingIdentity([1,2,3])