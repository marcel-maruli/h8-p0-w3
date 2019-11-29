function pasanganTerbesar(num) {
    // you can only write your code here!
    var nilaiTerbesar = 0
var str = String(num)
var penampung = ''
for (var i = 0; i < str.length-1; i++){
  penampung += str[i];
  var pasangan = str[i] + str[i+1]
if (nilaiTerbesar < pasangan) {nilaiTerbesar = pasangan}
}
return(nilaiTerbesar)
}


  



  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99