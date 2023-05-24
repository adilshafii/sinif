arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182];
let max=arr[0];
for(let i=0; i < arr.length;i++){
    if(typeof arr[i] === 'number' && arr[i]%2==0){
        if(max<arr[i]){
            max=arr[i];
        }
    }
}
console.log(max);