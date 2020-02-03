/**
这是装饰器工厂 return function
*/
function logClass(params:string){
    return function(that:{}){
        console.log(`这是装饰器传参${params}`);
        console.log(that)//这个是装饰器传入的对象
    }
}
@logClass('hello world')
class Learn{
    constructor(){}
}
type TypeObj=string|number;
let arr1:Array<string|number>=['1','2',3];
let arr2:Array<TypeObj>=['1','2',3];
