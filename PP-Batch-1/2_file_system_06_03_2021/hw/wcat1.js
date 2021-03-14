let fs=require('fs');

//npm install read-each-line-sync
let readEachLineSync = require('read-each-line-sync');

function scommand(filepath)
{
    readEachLineSync(filepath, 'utf8', function(line) {
        if(line.length!=0)
        {
            console.log(line);
            console.log("\n");
        }
        
      })
}

module.exports={
    scommandfn: scommand
};