function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var angka = 0;
    for (var i = 0; i < arr.length-1; i++){
        var selisih = arr[i+1] - arr[i]
    // console.log (selisih)   
    }
       for (var j = arr.length-1; j > 0 ; j--){
           var selisih2 = arr[j] - arr[j-1]
        //    console.log (selisih2)
      
        }

       var flag = false
       if (selisih == selisih2) {
           flag = true        
       }
       return flag
    }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false