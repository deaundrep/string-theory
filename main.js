/******************
 * YOUR CODE HERE *
 ******************/
const indexedChars = function(str){
  let result = '';
  for(let i = 0; i < str.length; i++){
    result += i + str[i];
  }
  return result;
}

const exclaim = function(str){
  let yelling = ''
  for (let i = 0; i < str.length; i++){
    if  (str[i] === '?' || str[i] === '.'){
      yelling += '!'
    }else{
      yelling  += str[i]
    }
  }
return yelling;
}

const repeatIt = function(str, num){
  let repeatStr = ''
  while(num > 0){
    repeatStr += str;
    num--;
  }
  return repeatStr;
}

const truncate = function(str){
  let result = ''
  for (let i = 0; i < str.length; i++){
    if (str[i] >= 15){
      result += '...'
    } else{
      result += str[i]
    }
  }
  return result;
}

const ciEmailify = function(name){
  let email = ' '
  for (let i = 0; i < name.length; i++){
    if(name[i] === ' '){
      email += '.'
    }else{
      email += name[i].toLowerCase;
    }
  }
  return email
}

const reverse = function(str){
let result = ''
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i]
  } 
  return result;
}

const onlyVowels = function(str){
  let result = ''
  for(let i = 0; i < str.length; i ++){
    if ('aeiouAEIOU'.includes(str[i])){
      result += str[i]
    }
  }
    return result;
}

const numberedChars = function(str){
  let result = ''
  for(let i = 0; i < str.length; i ++){

  }
}

const crazyCase = function(str){
  let result = ''
  for(let i = 0; i < str.length; i ++){
    if (i % 2 !== 0){
      result += str[i].toUpperCase();
    }else{
      result += str[i].toLowerCase();
    }
  }
  return result;
}

const titleCase = function(str){
  let result = ''
  for(let i = 0; i < str.length; i ++){
    if (str[i -1]=== ' ' || i ===0){
      result += str[i].toUpperCase();
    }else{
      result += str[i].toLowerCase();
    }
  }
  return result;
}

const camelCase = function(str){
  let result = ''
  for(let i = 0; i < str.length; i ++){

  }

}

const crazyCase2ReturnOfCrazyCase = function(str){
  let result = ''
  let courter = 1
  for(let i = 0; i < str.length; i ++){
    if (str[i] !== ' '){
      courter++;
    }
    if(courter % 2 !==0){
      result += str[i].toUpperCase();
    }else{
      result += str[i].toLowerCase(); 
    }
  }
  return result;
}









/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
