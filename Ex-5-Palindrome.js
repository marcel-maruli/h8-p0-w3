function palindrome(kata) {
    // you can only write your code here!
    var penampung = ''
    var penampung2 = ''
    for (var i = kata.length-1; i >= 0; i--) {penampung += kata[i]}
    for (var j = 0; j < kata.length; j++) {penampung2 += kata[j]}
    // var inisiasi = false;
    // if (penampung == penampung2){inisiasi = true}
    // else if (penampung != penampung2) {inisiasi = false}
            return (penampung == penampung2)
        }       

  
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false