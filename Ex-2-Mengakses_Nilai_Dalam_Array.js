function balikString(str) {
    var penampung = "";
    for (var i = str.length-1; i >= 0; i--){penampung += str[i]}
    // console.log (penampung)
    return penampung
}








//input "hello world!"
console.log (balikString("hello world!"))
//output  "!dlrow olleh"
console.log (balikString("marcel"))
//output "lecram"