//精确计算
//乘法
export const NumberMul=(arg1:number,arg2:number):number=>{
    var m:number=0;
    var s1:string=arg1.toString();
    var s2:string=arg2.toString();
    try {
        m+=s1.split(".")[1].length;
    } catch (e) {
        console.log(e)
    }
    try {
        m+=s2.split(".")[1].length;
    } catch (e) {
        console.log(e)
    }
    return Number(s1.replace(".","")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//减法
export const NumberSub=function(arg1:number,arg2:number):number{
    var re1:number,re2:number,m:number,n:number;
    try{
        re1=arg1.toString().split(".")[1].length;
    } catch(e) {
    re1=0;
    }
    try{
        re2=arg2.toString().split(".")[1].length;
    } catch(e) {
        re2=0;
    }
    m=Math.pow(10, Math.max(re1,re2));
    n=(re1>=re2)?re1:re2;
    return Number(((arg1*m-arg2*m)/m).toFixed(n));
}
//加法
export const NumberAdd=function(arg1:number, arg2:number):number {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) { 
        r2 = 0 
    } 
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2;
    return Number (((arg1 * m + arg2 * m) / m).toFixed(n));
}