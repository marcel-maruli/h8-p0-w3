function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var baris1 = []
    var baris2 = []
    var baris3 = []
    var penampung = [baris1, baris2, baris3]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] %2==0 && arr[i]%3!=0 || arr[i] %4==0){
            baris1.push (arr[i])
        }
        else if (arr[i] %3!=0 && arr[i]%1==0 && arr[i]%2!=0) {
            baris2.push (arr[i])}
        else if (arr[i]%3==0){
            baris3.push (arr[i])
        }    
    }
    return penampung
}
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]