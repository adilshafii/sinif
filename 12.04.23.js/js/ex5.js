arr=[2,9,6,11,-5,-3,8,6,"Azerbaycan",true,12,346,"LANKARAN","limon",2,9,182];
for(let i=0; i < arr.length;i++){
    if(typeof arr[i] === 'boolean'){
        
        console.log(arr[i-1],arr[i+1]);
    }
    
}