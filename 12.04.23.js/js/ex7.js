arr=[2,9,6,11,-5,-3,8,6,"AzerBayCan",true,12,346,"LANKARAN","LimOn",2,9,182];
for(let i=0; i < arr.length;i++){
    if(typeof arr[i] === 'string'){
        if(arr[i] === arr[i].toUpperCase()){
            console.log(arr[i]);
        }
    }
}