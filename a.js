/*let a=5,b=10
console.log(a+b,a-b,a%b,a/b,a*b,a**b)*/
/*let a =[1,2,3,4]
console.log(a,typeof(a),Array.isArray(a))*/
/*let obj={name:'sandeep',age:25,dept:'cse',marks:90}
console.log(obj)*/
/*s='23a'-5
console.log(s)*//*
let a=5 ,b=16,c=30
if(a>b && a>c){
    console.log("a is greater",a)
}
else if(b>c){
    console.log("b is greater",b)
}
else{
    console.log("c is greater",c)
}*//*
let n=20
if (n%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}*//*
let a=5,b=9,c=3
if(a>b&&a>c){
    if(b>c){
        console.log(c,b,a)
    }
    else{
        console.log(b,c,a)
    }
}
else if(b>c){
    if(a>c){
        console.log(c,a,b)
    }
    else{
        console.log(a,c,b)
    }

}
else{
    if (a>b){
        console.log(b,a,c)
    }
    else{
        console.log(a,b,c)
    }
}*//*
let n=-6
switch(n%2){
    case 0:console.log("Even") 
            break
    case 1:console.log("Odd")
           break
    default:console.log("invalid")
}*//*
let m=39
switch(true){
    case m>80:console.log("A")
    break
    case m>=60:console.log("B")
    break
    case m>=40:console.log("C")
    break
    default:console.log("F")
}*//*
let n=10,i
for (i=1;i<=n;i++){
    console.log(i)
}*//*
let a=-1,b=1,n=10,i,c
for(i=1;i<=n;i++){
    c=a+b
    console.log(c)
    a=b
    b=c
}
 *//*
let n=10,i
for(i=1;i<n;i++){
    if(n%i==0){
        console.log(i)
    }
}
*//*
let n=5,f=true,i
for(i=2;i<n;i++){
    if(n%i==0){
        f=false
        break
    }
}
if (f){
    console.log("prime")
}
else{
    console.log("not prime")
}*//*
for (let i=1,j=10;i<j;i++,j--) {
    console.log(i,j)
}*//*
let i=1
for(;i<=10;){
    console.log(i)
    i=i+2
}*//*
for(i=1;i<=10;i++);
{
    console.log(i)
}*//*
let n=3443,s=0,r
for(;n!=0;){
    r=n%10
    s=s+r
    n=parseInt(n/10)
}
console.log(s)*//*
let a=15,b=25,r
while(b!=0){
    r=a%b
    a=b
    b=r
}
console.log(a)*//*
let n=5
do{
    console.log("HELLO")
}while(n%5!=0)*//*
let i, s={"name":"js","age":25,"sal":7800}
for (i in s){
    console.log(s[i])
}*//*
let i,a=[1,2,3,4,5,6,7,8,9,0]
for (i in a){
    console.log(a[i])
}*//*
let a=[1,2,3,4,5,6,7,8,9,0]
a.forEach(Element=>{
    console.log(Element)
});*//*
a=[1,2,3,4,5,6,7,8,9,0,4]
for(i in a){
    console.log(i)
}*//*
s='javascripts'
for(i of s){
    console.log(i)
}*//*
i=-1
while(i<5){
    console.log(i)
    i++
}*//*
i=0
do{
    console.log(i)
    i++
}while(i<15);*/
/*ARRAYS*//*
a=[1,2,3,4,'sa','nd','ee','p']
for(i=0;i<a.length;i++){
    console.log(a[i])
}*//*
a=[1,2,3,4,'sa','nd','ee','p']
a.sort()
console.log(a)*//*
a=[1,2,3,4,'sa','nd','ee','p']
a[a.length]=20
a[a.length]=200
console.log(a)
console.log(a.pop())
console.log(a.shift())
console.log(a)
console.log(a.shift())
console.log(a)
a.unshift(20)
console.log(a)*/
/*STRINGS*//*
s='HELLO TO ALL'
console.log(s.length)
console.log(s.charAt(1))
console.log(s.charCodeAt(2))
console.log(s.indexOf('O'))
console.log(s.split(" "))
a=s.toString()
console.log(a)
n=a.valueOf(s)
console.log(n)
console.log(s.replace('to','sandeep'))
s='hello to all'
console.log(s.replace("to","sandeep"))*//*
s="HELLO"
console.log(s.trim())
console.log(s.trimStart())
console.log(s.repeat(5))
console.log(s.slice(2,4))
console.log(s.substring(2,5))
*//*prime factor
let n=20,i,j
for(i=2;i<=n;i++){
    let f=true
    for(j=2;j<i;j++){
        if(i%j==0){
            f=false
            break
        }
    }
    if(f){
        console.log(i)
    }
}*//*
let i
for(i=1;i<=10;i++){
    if(i%3==0){
       // break
       continue
    }
    console.log(i)
}*//*
let a=[4,34,1,2,9,54]
let b=new Array(12)
let c=new Array([6,9,2,15,6])
console.log(a,b,c)*//*
let a=[34,1,2,9],i
for (i=0;i<a.length;i++){
    console.log(a[i])
}
for(i in a){
    console.log(a[i])
}
for(e of a){
    console.log(e)
}*//*
let a=[3,4,2,1]
console.log(a)
a.push(9)
console.log(a)
a[a.length]=12
console.log(a)
let b=[...a,34]
console.log(b)*/
/*let a=[6,8,2,9]
a.unshift(4)*/
/*console.log(a)
let b=[22,...a]
console.log(b)
console.log(a.pop())
console.log(a)
console.log(a.shift())
console.log(a)*/
/*console.log(a.splice(2,2))*/
/*functions*//*
function add(a,b,c){
    return a+b+c
}
console.log(add(1,0,2))*//*
function fun(b,c=0){
    console.log(a,b,c)
}
fun(a=5,0)*//*
function fun(a,b,...x){
    console.log(a,b,x)
}
fun(4,5,6,2,3,5,4,5,65,2,3,2,6,56,2,62,26,2,62,6,2,62,2,2,2,62,6,2,62)
*//*
function * fun(n){
    for(let i=1;i<n;i++){
        yield i
    }
}
console.log([...fun(5)])*//*
function fun(){
    let a=5,b=10,c=1
    //return [a,b,c]
   // return a
   return {a,b,c}
   //return (a,b,c)
}
/*console.log(fun())
let [x,y,z]=fun()
console.log(x,y,z)*/
/*let {a,b,c}=fun()
console.log(a,b,c)*//*
function fun(n,i=2){
    if(n<2){
        return false
    }
    else if(i==n){
        return true
    }
    else if(n%i==0){
        return false
    }
    else{
        return fun(n,i+1)
    }
}
console.log(fun(5))*/
//function expression:
/*console.log((function (a,b){return a+b})(4,5));
let fact=function(n){
    let f=1,i 
    for(i=1;i<n;i++){
        f=f*i
    }
    console.log(f);
}   
fact(5)
fact(8)*/
//arrow functions:
/*
let add=(a,b)=>a+b
let sub=(a,b)=>{
    return a-b
}
let gcd=(a,b)=>{
    while(b!=0){
        let r=a%b
        a=b
        b=r
    }
    return a
}
let a=[1,2,3,4,5],r=[],e
for(e of a){
    r.push(e*e)
}
let b=[1,2.0,3.2,4.5,6.8],s=[],f
for(f of b){
    s.push(3.14*f*f)
}
let c=[1,2,3,5,6,7,8],t=[],g
for(g of c){
    t.push(g*g*g)
}*/
//console.log("area of the circle",r,"area of circle",s,"volume of cube",t);
/*let ac=(r)=>3.14*r*r,as=(s)=>s*s,vc=(s)=>s*s*s
function hof(a,fun){
    let r=[],e
    for(e of a){
        r.push(fun(e))
    }
    console.log(r);
}
b=[1,2,3,4,5],c=[1,2,8,5,6,7],d=[4,5,6,7,8]
hof(b,ac),hof(c,as),hof(d,vc)*/
//map syntx:update arr=arr.map((element,index,arr)=>{stm-1.....,return update arr})
/*let a=[1,2,3,4,5,6,7,8,9,0],r=a.map((e)=>{
    if(e%2==0){
        return e*2
    }
    else{
        return e
    }
})
console.log(r);*//*
let a=[1,2,3,4,5,6,7,8,9,0],r=a.map((e)=>e%2==0?e*2:e)
console.log(r);*//*
let a=['Pbks','RcB','gT','mi']
let r=a.map((str,ind)=>
    {
        if(ind%2==0){
            return str.toUpperCase()
        }
        else{
            return str.toLowerCase()
        }
    })
/*ind%2==0?str.toUpperCase():str.toLowerCase())
console.log(r);*/
/*
let arr=["abc","bcde","sandeep"]
let c=0
let r=[]
for(let i in arr){
    if(arr[i].length>c){
        c=arr[i].length
        r=arr[i]
    }
}
console.log(r);*/
let a=[{sal:1},{sal:2}]
let s=0
for(let i in a){
    s=s+a[i].sal
}
console.log(s);




