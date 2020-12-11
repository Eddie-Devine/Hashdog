const fs = require('fs');
const crypto = require('crypto');

var hash;
var hashMethod;
var length;
var print;
var charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//var charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '>', '<', '?', '{', '}', '+', '=', '-', '_', '`', '~', '.', '/'];

var getPermutations = function(list, maxLen) {
    // Copy initial values as arrays
    var perm = list.map(function(val) {
        return [val];
    });
    // Our permutation generator
    var generate = function(perm, maxLen, currLen) {
        // Reached desired length
        if (currLen === maxLen) {
            return perm;
        }
        // For each existing permutation
        for (var i = 0, len = perm.length; i < len; i++) {
            var currPerm = perm.shift();
            // Create new permutation
            for (var k = 0; k < list.length; k++) {
                if(currPerm.concat(list[k]).length == maxLen){
                    var word = currPerm.concat(list[k]).join('');
                    if(print){console.log('Tried: ' + word);}
                    var testHash = crypto.createHash(hashMethod).update(word).digest('hex');
                    if(testHash == hash){
                        console.log('FOUND PASSWORD: ' + word);
                        return;
                    }
                }
                perm.push(currPerm.concat(list[k]));
            }
        }
        // Recurse
        return generate(perm, maxLen, currLen + 1);
    };
    // Start with size 1 because of initial values
    return generate(perm, maxLen, 1);
};

fs.readFile('hashData.txt', 'utf8', function(err, data){
    var text = data.split(':');
    hashMethod = text[0];
    hash = text[1];
    length = parseInt(text[2]);
    if(text[3].includes('y')){
        print = true;
    }
    else{
        print = false;
    }

    fs.readFile('keyWords.txt', 'utf8', function(err, data){
        if(!data.includes('ECHO is off.')){
            text = data.split(' ');
            for(i = 0; i < text.length; i++){
                charList.push(text[i]);
            }
        }

        var startTime = new Date().getTime();
        console.log('--CRACKING HASH--');
        getPermutations(charList, length);
        var endTime = new Date().getTime();
        console.log('RUN TIME: ' + (endTime - startTime)/1000);
    });  
});