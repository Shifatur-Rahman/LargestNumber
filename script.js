let arr = [15, 19, 9, 25, 75, 11];

let max = arr[0];

for(let i=0; i<arr.length; i++){

    if(arr[i]>max){
        max = arr[i];
    }

}

document.getElementById('para').innerHTML = max;