
function shout(string) {
    return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())  
}
function logWhisper (string) {
    console.log(string.toLowerCase())
}

const string = "hello";
const ily = "I love you, Grandma."
function sayHiToGrandma(string,ily){
    if (string === string.toLowerCase()){
      return "I can't hear you!"
    } else if (string === string.toUpperCase()){
      return "YES INDEED!"
    } else if (ily === ily) {
      return "I love you, too."
    }
  }