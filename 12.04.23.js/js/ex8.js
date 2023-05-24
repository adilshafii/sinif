arr=[2,9,6,11,-5,-3,8,6,"AzerBayCan",true,12,346,"LANKARAN","LimOn",2,9,182];

let count=0;
for(let i=0; i < arr.length;i++){
    if(typeof arr[i] === 'string'){
        // console.log(arr[i]);
        for(let j=0; j<arr[i].length;j++){
            // console.log(arr[i][j]);
            if(arr[i][j]===arr[i][j].toUpperCase()){
                // console.log(arr[i][j]);
                count++;
            }
        }
        
    }
}