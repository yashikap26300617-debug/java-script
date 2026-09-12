// let arr=["a","b","c","a","b","d",];
// let obj={}
// for(let i=0;i<arr.length;i++){
//   if(obj[arr[i]]==undefined){
//     obj[arr[i]]=1;
//   }
//   else{
//       obj[arr[i]]+=1;
//   }
// }
// console.log(obj)


// let num=[1,2,3,4,5];
// let ans=num.map((item)=>item+1);
// let ans2=num.filter((item)=>item%2==0)
// console.log(ans2)


let que=[1,2,3,4,5,6];
// yes \no
let isPresent=false;
for(let i=0;i<que.length;i++){
    if(que[i]==4){
        isPresent=true;
    }
   
}
console.log(isPresent?"yes":"no") //ternary operator

