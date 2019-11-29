function angkaPalindrome(num) {
    while (true) {
        num++;
        var penampung = '';
        var str = String(num);
        for (var i = str.length-1; i >= 0 ; i--){
            penampung += str[i]
            console.log (i)
        }
        if (str == penampung) {
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