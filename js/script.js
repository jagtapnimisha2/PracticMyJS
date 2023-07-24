// // var let const
// // var pranshu;//declar
// // var prnashu ="kushwah";//in

let p=9;
p=9;

const pp=1;
const ppp=1;
// // var pranshu="kushwah";//we can use redcalre and reassign 
// // var pranshu="kushwah1";
// // console.log(pranshu);

// // let pranshu1="kushawah"//we can't redeclare but we can use reasing
// //  pranshu="kushwaha1"
// // console.log(pranshu1);

//  pranshconstu2="kushwaha"//int this case we can't reasing redeclaire
// // pranshu2="kushwaha"
// console.log(pranshu2);


// "use strict";
// let d=9;
// console.log("hello world");


// document.getElementById("h").innerHTML="jagtap";

// let,var,const
//============== undifine===============
// let box;
// console.log(box);

// =================type================ 
// console.log(typeof 2);

//================single line comment=================
//================ muiltiline comment=================
/*
vkrflr
jgvkgrjkgf
rkgmrm
rkmglrgm
 */
// ===================it is redecalre and reassign=================
// var box="nimi";
// var box="jagtap"
// box="kv";
// console.log(box);
// ===============let is not a redeclare=============================
// let box1=1;
//   box1=2;
// console.log(box1);

// ====================not a redeclare not a reasing==========
// const box2=1;
// console.log(box2);
// =============non-primative-object,arry===============
// arry:-more than 2 data contain.
// ====================array==============
// let arr=[1,2,3,4,"nimi",6.2,true,[1,22,"r"]];
// console.log(arr[6]);
// arr[6]=false;
// console.log(arr);
// =====================object==================

// let obj1={
//     n:"nimi",
//     age:21,
//     school:"k.v"
// }
// console.log(obj1);

// =========================Math methord==============
// const pi=Math.PI;
// console.log(pi);
// console.log(Math.round(pi));
// // ======================point ke bad 5 ke uper ki value incresing oder me hogi for example:=6.6=7 or 5 ke niche ki value decring oder me hogi for example:-6.4=6.
// console.log(Math.round(5.47));
// console.log(Math.round(6.57));
// console.log(Math.floor(pi));
// console.log(Math.ceil(pi));

// ==========================array==========================
// const arr=["nimi",2];
// console.log(arr.length);

// const arr=Array();
// console.log(arr);

//  const arr1 = new Array();
//  console.log(arr1);

//  const arr2=[];
//  console.log(arr2);

// ===============================diffrent data type=====================
// const arr=["nimi",2,true,
// {city:"khandwa"},
// {skils:["html","css","js"]}]
// console.log(arr);

// // ===============================Creating an array using split=====================
// let js1="javascript is a very good language";
// const arrjs1=js1.split('');
// console.log(arrjs1);

// let js="javascript is a very good language";
// const arrjs=js.split(' ');
// console.log(arrjs);

// let js="javascript,is,a,very,good,language";
// const arrjs=js.split(',');
// console.log(arrjs);

// ====================Accessing array items using index==================
// const fruits=["banana","orange"];
// let fru=fruits[1];
// console.log(fru);

// const numbers=[2,4,6,8];
// console.log(numbers.length);
// // ===============lastIndex==============
// let lastIndex=numbers.length-1;
// console.log(lastIndex);

// const webTeach=["html","css","js"];
// console.log(webTeach.length);
// console.log(webTeach.length-1);
// console.log(webTeach[1]);



// const arr=[1,2,3,4,5,6,4];
// console.log(arr[0]);
// console.log(arr.indexOf(2))
// console.log(arr.lastIndexOf(4))




//======================Modifying array element=======================
// const numbers=[1,2,3,4,5,6];
// numbers[2]=10;
// console.log(numbers)

// =========================Methods to manipulate array=================
// const arr=Array();
// console.log(arr);
// // ===============fill methord==================
//  const eightthemtyvalue=Array(8).fill("x");
//  console.log(eightthemtyvalue);

// ==========================Concatenating array using concat==================
// const fruits=[1,2,4];
// const fru=[2,6,8];
// const tri=fruits.concat(fru);
// console.log(tri);

// ===========================Getting index an element in arr array===============
// const num=[1,2,3,4,5,6];
// console.log(num.indexOf(6));//index nob btayega arry ka
// ========in string============
// const fru=["banana","oragne"];
// let fruits=fru.indexOf("oragne");
// console.log(fruits);
// if(fruits==-1){
//     console.log("This fruit does not exist in the array");
// }
// else{
//     console.log("This fruit does exist in the array")
// }
// ====================ternary==============
// fruits==-1?console.log("fruts nhi he"):console.log("frut he");
// fruits==-1? : ;

// =======================Getting last index of an element in array=============
// const num=[1,2,6,3,4,2,1,8,4,6,6,4];
// console.log(num.lastIndexOf(6));
// console.log(num.indexOf(4));

// ==================includes==================
// const num=[2,1,4,6];
// console.log(num.includes(6));

// ====================Checking array:arry he ki nhi===========
// const num=[2,1,3,4];
// console.log(Array.isArray(num));

// const num1=100;
// console.log(Array.isArray(num1));

// ========================Converting array to string================
// const num=[1,2,3,4,5];
// const s=num.toString();
// console.log(s);
// const names=["nimi","deep"];
// console.log(names);
// console.log(names.toString());

// ===========================Joining array elements================
// const js="javascript";
// console.log(js);
// const arrjs=js.split('');//string ko arry me convert
// console.log(arrjs);
// const arrjs=["nj","t"]
// console.log(arrjs);
// const s=arrjs.join('');//arry ko string me convert
// console.log(s);

// =========================Slice array elements =====slice:cuttana=====================
// const num=[0,1,2,3,4,5,6,7,8,9,10];
// console.log(num.slice(1,4));
// // console.log(num.slice(6,8));
// console.log(num.slice(0));
// console.log(num.slice(3,num.length));

// // // ================================Splice method in array ==splice:element ko katega====================
// const num1=[0,1,2,3,4,5,6,7,8,9,10];
// num1.splice(1,4);
// console.log(num1);
// // ==========================================splice===============
// const fruits=["nimi","deep","pgl","he","dono"];
// fruits.splice(2,2,"husiyar","hee");
// console.log(fruits);

//=============================youtub se slice or splice=========================
// slice
// let arr=["nimi","deep","karan","jagu","chandu"];
// let b=arr.slice(2,4);
// console.log(b);

//splice 
// var s=["nimi","deep","karan","jagu","chandu"];
// s.splice(2,0,"neha","koiname");
// console.log(s);

// var s=["nimi","deep","karan","jagu","chandu"];
// s.splice(2,2,"neha","koiname");
// console.log(s);

// var s=["nimi","deep","karan","jagu","chandu"];
// s.splice(2,3);//index no.2 se kitne element delet karna he 3 delet karna he
// console.log(s);

// ===============================Adding item to an array using push=========================
// const arr=["nimi","deep","karan","jagu","chandu"];
// arr.push("kush");
// console.log(arr);

// ===============================pop=====================
// const arr=["nimi","deep","karan","jagu","chandu"];
// arr.push("kush");
// arr.pop();
// console.log(arr);

// ============================Removing an element from the beginning============
// =======================shift(aage se remove hoga)=========================
// const arr=["nimi","deep","karan","jagu","chandu"];
// arr.shift();
// console.log(arr);

// ===============================Add an element from the beginning========================
// =========================unshift(aage se add hoga)=================
// const arr=["nimi","deep","karan","jagu","chandu"];
// arr.unshift("kush");
// console.log(arr);

// ===============================Reversing array order=================
// ================================Revers==========================
// const arr=["nimi","deep","karan","jagu","chandu"];
// arr.reverse();
// console.log(arr);

// ==========================Sorting elements in array============
// ==========sort:=sort in assending order=======
// const arr=["a","c","d","b"];
// arr.sort()
// console.log(arr);
// const arr=["3","2","1","8"];
// // const arr=[3,2,1,8];
// arr.sort()
// console.log(arr);

// ---------Exercise: Level 1------
// 1] Declare an empty array;
// const arr=[];
// const arr1=Array();
// console.log(arr1);

// 2] Declare an array with more than 5 number of elements
// const arr=[1,2,3,4,5,6];
// console.log(arr);

// 3]Find the length of your array
// const arr=[1,2,3,4,5,6];
// console.log(arr.length);

// 4] Get the first item, the middle item and the last item of the array
// const arr=[1,2,3,4,5,6,4];
// // console.log(arr[0]);
// // console.log(arr.length/2);
// let arr1=arr.length-1;
// console.log(arr1);
// console.log(arr[6]);

// 5] Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const arr=[1,"nimi",true,undefined,null,{name:"nimisha"},[2,1,4,6]];
// console.log(arr.length);

// 6] Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

// 7] Print the number of companies in the array 
// 8] Print the array using console.log()
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log(itCompanies);

// 9]Print the first company, middle and last companyconst itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log(itCompanies[0]);
// console.log(itCompanies.length/2);
// console.log(itCompanies[3]);
// console.log(itCompanies.length-1);
// console.log(itCompanies[6]);

//10] Print out each company
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log(itCompanies);

// 11] Change each company name to uppercase one by one and print them out
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());

// 12] Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const arr=["Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies"];

// 13] Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// let inedxx=itCompanies.indexOf("Google");
// if(inedxx===-1){
// console.log("company is not found");
// }else{
// console.log("company");
// }
// or
// inedxx==-1?console.log("company is not found"):console.log("company");

// 14] Filter out companies which have more than one 'o' without the filter method
// const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// const filteredCompanies = [];

// for (let i = 0; i < itCompanies.length; i++) {
//   const company = itCompanies[i];
//   if (company.toLowerCase().includes("o")) {
//     filteredCompanies.push(company);
//   }
// }

// console.log(filteredCompanies); // ["Google", "Microsoft", "Oracle"]

// 14] Filter out companies which have more than one 'o' without the filter method
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// const filteredCompanies = [];

// for (let i = 0; i < itCompanies.length; i++) {
//   const company = itCompanies[i];
//   if (company.toLowerCase().split("o").length - 1 > 1) {
//     filteredCompanies.push(company);
//   }
// }

// console.log(filteredCompanies); // ["Google", "Microsoft", "Oracle"]

//========================== desctrucring ===============================
// let obj=[1,2,6];
// let [x, ,y]=obj;
// console.log(obj);
// console.log(x);
// console.log(y);

// let arr=[8,9,6];
// let [a, ,b]=arr;
// console.log(a,b);

// let arr=[2,6,4,8];
// let [a, ,...rest]=arr;
// console.log(a,rest);

// let arr=[4,6,3,2,1,6,9,8,6];
// let [ , , c, ,d,...res]=arr;
// console.log(c,d,res);

// let {a,b}={a:1,
//   b:2
// }
// console.log(a,b);

// ====================spred oprator:-it convert array into the object==========================================
// let arr=[1,2]
// let obj1={...arr}
// console.log(obj1)

// let obj={
//   n:"nimi",
//   company:"acc"
// }
// console.log({...obj});

// let obj111={n:"m",c:"g"};
// console.log({...obj111, n:"nimi"});

// =========================DESTRUCHRING 30 DAYS COUSRE=======================
// const arr=[1,2,3,4];
// const [a,b,c,d]=arr;
// console.log(a,b,c,d);

// const fullstack=[['html','css','js','react'],['node','mongo db']]
// const [frontEnd,BackEnd]=fullstack;
// console.log(frontEnd);
// console.log(BackEnd);

// const arr=[undefined,"book","dep"]
// let [
//   firstname="nimi",
//   secdbook,
//   lastname,
//   perso="nimisha"
// ]=arr
// console.log(firstname,secdbook,lastname,perso);

// const names=[ ,"de","book"];
// let [f="nimi",boook,k=21]=names;
// console.log(f,boook,k);

// ===================Destructuring during iteration=================
// const companies=[['a','b'],['c','d'],['e','f'],['g','h']];
// for(let [alfabet,sencondalfabets] of companies){
// console.log(alfabet,sencondalfabets);
// }

// ===============Renaming during structuring================
// const reactangle={
//   width:10,
//   hight:"21",
//   area:200
// }
// let{width:w,hight:h,area:a}=reactangle;
// console.log(w,h,a);

// const r={
//   w:2,
//   h:1
// }
// let{w,h,p=21}=r;
// console.log(w,h,p);
// const a1={ww:21,k:1,pp:3};
// or
// let{ww,k,pp=2}=a1;
// console.log(ww,k,pp);
// console.log(this)
// function myfun(number){
// console.log(this)
// }
// myfun();
// let s=()=>{
//   console.log(this);
// }
// s();

// ========================js w3 school================
// carName="nimi";
// var carName;
// console.log(carName);

// const p=2;
// console.log(p)

// const cars=["nimi","j"];
// cars[1]="jag";
// console.log(cars);
// const a={
//   n:"nimi",
//   l:"j"
// }
// a.n="o";
// a.ll="p",
// console.log(a);

// function myfunction(){
//   var car ="maruti";
//   console.log(car);
// }
// // console.log(car)
// myfunction();

// let x=this;
// console.log(x);

// function myfun(){
// return this;
// }
// document.getElementById("demo").innerHTML=myfun();

// const person={
//   name:"nimi",
//   getingfullname:function(){
//     return this;
//   }
// }
// console.log(person);

// const g;
// console.log(typeof(g));
// let g;
// console.log(typeof(g));

// console.log(Math.max(1,2,3));


// bind() Methord:-

// const person={
//   firstName:"nimi",
//   lastName:"jag",
//   fullName:function(){
//     return this.firstName+" "+this.lastName;
//   }
// }
// const member={
//   firstName:"nimisha",
//   lastName:"jagtap"
// }
// let fullNam=person.fullName.bind(member);
// document.getElementById("demo").innerHTML=fullNam();

// the bind() method is used to bind person.display to person.
// const person={
// fn:"n",
// ln:"j",
// display:function(){
// let d=document.getElementById("demo");
// d.innerHTML=this.fn+" "+this.ln;
// }
// }
// let n=person.display.bind(person);
// setTimeout(n,3000);

// ===========scope=========
// // block scope:--------
// // let or const :-locAl scope
// {
//   let x=2;
//   console.log(x);
// }



// // var:=globle scope
// {
//   var y=6;
// }
// console.log(y);


// function scope:-------
// function a(){
//   let b=112;
//   console.log(b);
// }
// a();
// // console.log(b);

// globle scope:---------
// let r=1;
// function a(){
//   let b=112;
//   console.log(r);
//   console.log(b);
// }
// a();
// console.log(r);
// console.log(b);

//================ hosting =================
// console.log(a);
// var a;
// console.log(a);
// run:------undifne,undefine

// run:--------undefine,2
// console.log(a);
// var a=2;
// console.log(a);

//======================let==================
// run:---------refrence error
// console.log(a);
// let a;
// console.log(a);

// run:---------undefine
// let a;
// console.log(a);

// run:------------sytex error---
// console.log(a);
// const a;
// console.log(a);

// run:--------refrence error
// console.log(a);
// const a=2;
// console.log(a);

// run:-----2
// const a=2;
// console.log(a);

// syntext error
// const a;
// console.log(a);

// let g=function ()
// {
//   return this;
// }
// console.log(g());

// function exprestions-----------
// let g=function ()
// {
//   console.log(g);
// }
// g();



// g();
// let g=function ()
// {
//   console.log("g");
// }

// function exprestions are not hosteed-------
// g();
// let g= ()=>
// {
//   console.log("g");
// }

// arrow function=============
// let f=()=>{
//   console.log("hello");
// }
// f();
// let h=()=>"hello";
// console.log(h())

// // =========================class===================
// class RailwayForm{
//   constructor(givenName,trainno){
// console.log("constracor called" +" "+ givenName+" "+ trainno);
// this.name=givenName
// this.trainno=trainno
//   }
// submit(){
// alert(this.name+" your form is submitted and trianno is "+this.trainno);
// }
// cancle(){
// alert(this.name+" your form is canled "+this.trainno);
// }
// // fill(givenName,trainno){
// // this.name=givenName
// // this.trainno=trainno
// // }
// }
// // create a form for nimi
// let nimiform=new RailwayForm("nimi",123);
// // fill the form for nimi
// // nimiform.fill("nimi",123);


// // create a form for deep
// let deepform=new RailwayForm("deep",456);
// // fill the form for deep
// // deepform.fill("deep",456);

// nimiform.submit();
// deepform.submit();
// deepform.cancle();

// // note:----
// // this kya he is object ki property hename
// // this.name jo proery he object ki
// // constacor :-- constractor hamesha chalta he jab bhi object ko bnate he

// ===============class=====================

// class railway{
//   constructor(givenname,trainno,adrres){
//     console.log("constracr called"+" "+givenname+" "+trainno+" "+adrres)
//     this.name=givenname
//     this.trai=trainno
//     this.add=adrres

//   }
//   submit(){
//     alert(this.name+" "+"your form is submited"+" "+"your trainno is"+" "+this.trai+" "+"your adders is"+" "+this.add);
//   }
//   cancle(){
//     alert(this.name+" "+"your form is cancled"+" "+"your trainno is"+" "+this.trai+" "+"your adders is"+" "+this.add);
//   }
// }
// let nimiform= new railway("nimi",123,"20 rajendranagar khandwa");
// nimiform.submit();
// let deepform= new railway("deep",123,"20 rajendranagar khandwa");
// deepform.submit();
// deepform.cancle();

// // ================================================callback===================================
// function sayhello(){
//   console.log("hello");
// }
// function sayhi(){
//   console.log("hi....");
// }
// function add(num1,num2,callback){
// console.log(num1+num2);
// callback();
// sayhello();
// sayhi();
// }
// let a=2;
// let b=2
// add(a,b,sayhello);
// add(1,1,sayhi);
// add(1,2,function(){
//   console.log("annonumus functiond");
// })
// add(2,2);
// // add(1,1);

// // =====================synchronus funcrions==========================
// function fun2(){
//   console.log("fun2 is startings")
// }
// function fun1(){
//   console.log("fun1 is starting");
//   fun2();
//   console.log("func1 is ending");
// }
// fun1();

// =====================Asynchronus funcrions==========================
// function fun2(){

//   setTimeout(()=>{
//     console.log("fun2 is startings")
//   },3000);
// }
// function fun1(){
//   console.log("fun1 is starting");
//   fun2();
//   console.log("func1 is ending");
// }
// fun1();

// =====================promises=========================
// new Promise(()=>{});
// as an function ke thorugh==============
// const pobj1=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// let roll_no=[1,2,3,4,5,6];
// resolve(roll_no);
// // reject("error")
// },2000);
// });

// ==========as an object ke thorugh==========
// const getBioDta=(indexdata)=>{
//   return Promise((resolve,reject)=>{
// setTimeout((indexdata)=>{
//   let biodata={
//     name:"nimi",
//     age:21
//   }
//   resolve(`my roll no is ${indexdata}. my name is ${biodata.name} and i am ${biodata.age} year old.`);
// },2000,indexdata)
//   });
// // }

// pobj1.then((rollno)=>{
// console.log(rollno);

// }).catch((error)=>{
// console.log(error);
// });

// pobj1.then((rollno)=>{
//   console.log(rollno);
//   return getBioDta(rollno[1]);
//   }).then((kuchbhi)=>{
//     console.log(kuchbhi);
//   }).catch((error)=>{
//   console.log(error);
//   });

// ========================mock for javascript :-this,promise,fetch================
// let obj1={
//     a:"nimi",
//     b:"jagtap",
//     fullName(){
//         return this.a+" "+this.b;
//     }
// }
// document.getElementById("demo").innerHTML=obj1.fullName();
// const object = {

//     message: 'Hello, World!',
    
//     getMessage() {
    
//     const message = 'Hello, Earth!';
    
//     return this.message;
    
//     }
    
//     };
    
//     console.log(object.getMessage()); 


// let g=new Promise((resolve,reject)=>{
// resolve("hello");
// reject("error");
// })
// g.then(()=>{console.log("resole")}).catch(()=>{console.log("reject")})

// let g=fetch("http://jsonplaceholder.typicode.com/todos");



// // =====================promise=======================
// function prom(a,b){
// return new Promise(function(resolve,reject)
// {
//     console.log("i am pending...........");
//     var c=a/b;
//     setTimeout(()=>{
//         if(a,b){
//             resolve(`your ans ${c}`);
//         }else{
//             reject("fILED");
//         }
//     },2000);
// });
// }


// prom(5,0).then((result)=>{
// console.log(result);
// }).catch((reject)=>{
//     console.log(reject);
// });
// console.log(prom(5,10));

// =====================callback====================
// function sayhello(){
//     console.log("hello");
// }
// function sayhii(){
//     console.log("hii");
// }
// function add(num1,num2,callback){
//     callback();
//     console.log(num1+num2);
// }
// let a=10;
// let b=10;
// add(a,b,sayhello);
// add(a,b,sayhii);


// add(30,6,function(){//anonomus functions
//     console.log("heee");
// });

// ==================async await functions==========================
// async:-
// async function test(){
//     return "hello";
// }
// console.log(test());

// async function test(){
//     return "hello";
// }
// test().then((result)=>{
//     console.log(result);
// });

// let test=async function(){
//     return "hello"
// }
// test().then((result)=>{
//     console.log(result);
// });

// let test=async ()=>"hello";
// test().then((result)=>{
//     console.log(result);
// });

// await:-
// async function test(){
//     console.log("a");
//     await console.log("b");
//     console.log("c");
// }
// test();
// console.log("d");
// console.log("e");
// ===============================================
// async function test(){
// console.log("1");
// let response= await fetch("json/student.json");
// console.log("2");
// let result=await response.json();
// console.log("kuck bhi");
// return result;

// }
// console.log("3");
// let c=test();
// console.log("4");
// console.log(c);

// // run:- 3,1,4,promise,2,kuch bhi

// ==================================================
//  async function test(){
// let response=await fetch("json/student.json");
// let st=await response.json();
// return st;

// }
// test().then((res)=>{
// console.log(res);
// }).catch((error)=>{
// console.log(error);
// });
// // ====================code short===============
// async function test(){
// return(await fetch("json/student.json")).json();

// }
// test().then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error);
// })
// =============bar bar catch methord ko call nhi karna pdhega uske liye try or catch methord ka use karte he===================
// async function test(){
// try{
// let response=await fetch("json/student.json");
// let stu=await response.json();
// return stu;
// }catch(error){
// console.log(error);
// }
// }
// test().then((result)=>{
//     console.log(result);
// })

// ==================================api===================
// let p = fetch("https://jsonplaceholder.typicode.com/todos")
// p.then((value1)=>{
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json()
    
// }).then((value2)=>{
//     console.log(value2) 
// })



// ==============================
// function one(x,y){
// return x+y;
// }
// let a=9;
// let b=9;
// console.log(one(a,b));
// const sum = (p,q) =>{
//     return p+q;
//  }
//  console.log(sum(4,8));

// const one = () =>{
//     console.log("jio");
//     return "hii";
// }
// console.log(one());
// =============questions==========
// Q1 write a program to print the marks of a student in an object using for loop
// let obj={
//     nimi:94,
//     deep:96,
//     rahul:24
// }
// for(let i=0;i<Object.keys(obj).length;i++){
//     console.log(Object.keys(obj)[i] +" "+ obj[Object.keys(obj)[i]]);
// }
// console.log(obj);

// Q2 write a program in Q1 using for in loop
// let marks={
//     nimi:98,
//     dee:24,
//     rahul:1
// }
// for(let i in marks){
//     console.log(i + " "+ marks[i]);
// }

// Q3 write a program to print "try again" until the user enters the correct number
// let correctnumber=4
// let i
// while(i!=correctnumber){
//    i= prompt("Enter a correct number")
//    console.log("try again");
// }
// console.log("the number is a correct");
// Q4 write a function to find mean of 5 number
// const mean=(x,y,z,a)=>{
// return (x+y+z+a)/4;
// }
// console.log(mean(2,4,6,8));
// ===========13 vedio strings===========