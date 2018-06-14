/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 
For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

function decodeString(str) {
    // regex num+open bracket+substring+close bracket
    let pattern = /(\d+)\[([a-z]*)\]/g
  
    //decode each matching subbstring untill pattern fails to match string
      while (pattern.test(str)) {
          str = str.replace(pattern, (match, num, substr) => substr.repeat(num))
      }
      return str
  }

// decodeString("2[b3[a]]") => baaabaaa

