type Name = string
type NameConvert = ()=> string
type NameOrConvert = Name | NameConvert

function getName(n:NameOrConvert): Name{
    if(typeof n === 'string'){
        return n
    }else{
        return n()
    }
}

console.log(getName('3'))
console.log(getName(()=>'3'))