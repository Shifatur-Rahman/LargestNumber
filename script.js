
let size = prompt('Enter your array limit');
let i, myInputArr = [], max=0;
for(i=0; i<size; i++){
        myInputArr[i] = parseInt(prompt('Enter your Number'));
        if(myInputArr[i] > max){
        max = myInputArr[i];
     }
}

document .write('Your Array Limit = '+ size + '<br/>');
document.write('Array = '+myInputArr+ '<br/>');
document.write('The Largest Number is = ' + max);
