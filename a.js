#!/usr/bin/env node

let fs = require("fs")

//fs.writeFileSync("a.txt", "7813462edgi2yt8gd")

// let n=10;
// let name = "lecture"

//console.log(process.argv);
let n =process.argv[2];
let name = process.argv[3];

(function (){

    if(Number.isNaN(n) || n<1){
        console.log("Invalid input")
        return
    }
    
    if(!fs.existsSync(`${name}-0`)){
        for(let i=0; i<n; i++){
            fs.mkdirSync(`${name}-${i}`);
        }
    }
    else{
        try{
            for(let i=0; i<n; i++){
                fs.rmdirSync(`${name}-${i}`);
            }
        }
        catch(err){
            console.log("Some error, size given is more than available folder");
        }
        
    }
    
})();
