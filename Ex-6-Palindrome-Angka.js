function angkaPalindrome(num) {
    // you can only write your code here!
   while (true) {
       num++;
    var str = String(num)
    var penampung = '';
    for (var i = str.length-1; i >= 0; i--){penampung += str[i]}
    if (str === penampung) {
        return str
    }      
}
}


  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001