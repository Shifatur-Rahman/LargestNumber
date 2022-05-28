// let arr = [15, 19, 9, 25, 75, 11];
// document.write('Array is : '+ arr);
// let max = arr[0];

// for(let i=0; i<arr.length; i++){

//     if(arr[i]>max){
//         max = arr[i];
//     }
// }

// document.getElementById('para').innerHTML = max;

let size = prompt('Enter your array limit');
let i, myInputArr = [], max;
for(i=0; i<size; i++){
   myInputArr[i] = prompt('Enter your Number');
}

max = myInputArr[0];

for(i=0; i<size; i++){
    if(myInputArr[i] > max){
        max = myInputArr[i];
     }
}

document.write('Array: '+myInputArr+ '<br/>');
document.write('The Largest Number is = ' + max);

// console.log(myInputArr);






