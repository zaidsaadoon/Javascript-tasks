let fs=require("fs");
let y=fs.readFileSync("./flower.txt").toString();
let rows=y.split('\n');
let row=y.split('\n');
console.log(rows.length)
var fy=0;
   for(let i = 0;i < row.length; i++){
      if(row[i].split(' ')[0].match(/(\bs\S+\b)/ig)){//to get the 1st item in sentence and start with S 
         fy=fy+1;
       console.log(row[i]); 
      }
   }
   console.log(rows.length-fy)
   for(let i = 0;i < row.length; i++){
      if(row[i].split(' ')[0].match(/(\bz\S+\b)/ig)){//to get the 1st item in sentence and start with S 
       console.log(row[i]);
      }  
   }
   for(let i = 0;i < rows.length; i++){   
    if((rows[i].length)==5){ console.log(rows[i]);}//to get the items with 5letteres   
}
