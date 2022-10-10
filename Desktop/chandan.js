//No. of sub-string starting and ending with same character.... 
let str='asa';
count=0;
for(y=0;y<str.length;y++){
    let bag='';
for(x=y;x<str.length;x++){
    bag+=str[x];
    
 if(bag[0]==bag[bag.length-1]){
    count++;
  
 }
  
}
}console.log(count);

//teacher mahood..(removing of consecative letters);
let str1='aaabbcceaae';
 bag1=str1[0];
for(a=1;a<str1.length;a++){
   
  if(bag1[bag1.length-1]!==str1[a]){
    bag1+=str1[a];
  }
}console.log(bag1);

//converting lower case to upper case and vice versa....

let str3='QWqw';
bag2='';
let lower='qwertyuiopasdfghjklzxcvbnm';

let  upper='QWERTYUIOPASDFGHJKLZXCVBNM';
 for(w=0;w<str3.length;w++){
 for( e=0;e<26;e++){
    if(str3[w]== lower[e]){
        bag2+=upper[e];
    }
if(str3[w]==upper[e]){

bag2+=lower[e];

}
 
 }
}console.log(bag2);

//finding the frequency of letters in the string......
let str4='aa';
let s='abcdefghijklmnopqrstuvwxyz';
obj2={};
for(x=0;x<s.length;x++){
 if(obj2[s[x]]==undefined){
 obj2[s[x]]=x+1;
 }
}
sum=0;
for(x in str4){
  sum+=obj2[str4[x]];
}console.log(sum);
// let b=9;
// console.log(b);
 let min=Infinity;
 let max=-Infinity;





 //sorting an arr,,,,,,,,,,,
 // Bubble sort -------; 
 function sortarr12(...arr12){
for(b=0;b<=arr12.length-1;b++){
for(c=0;c<=arr12.length-1-b;c++){
if(arr12[c] < arr12[c+1]){
   let d=arr12[c];
    arr12[c]=arr12[c+1];
  arr12[c+1]=d;}
}console.log(arr12[b]);
} 
 }
sortarr12(2,23,5,4,34);
//Selection sort ''''''''';
console.log("chandan singh");



