function groupAnimals(animals) {
    // you can only write your code here!
var Hasil = [];
var ind = 0;
animals.sort ()
for (var i = 0; i < animals.length; i++){
    if (Hasil.length === 0) {
        Hasil.push ([animals[i]]);      
    }
    else if (Hasil[ind][0][0]===animals[i][0]) {
        Hasil[ind].push (animals[i])
    }
    else {
        Hasil.push ([animals[i]])
        
    }
}
// console.log (Hasil)
    return Hasil
}
            
    // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]