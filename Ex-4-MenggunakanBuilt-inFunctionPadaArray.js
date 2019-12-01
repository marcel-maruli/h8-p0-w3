
function dataHandling2(arr) {
    arr.splice (1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    arr.splice (4, 1, "Pria", "SMA International Metro")
    console.log (arr)
       var bulan = arr[3].split('/')
       var namabulan = ""
    //    console.log (bulan)
       switch (bulan[1]) {
           case '01':
           namabulan = "Januari"
           break;
           case '02':
            namabulan = "Februari"
            break;
            case '03':
            namabulan += "Maret"
            break;
            case '04':
            namabulan += "April"
            break;
            case '05':
           namabulan +=  "Mei"
            break;    
            case '06':
            namabulan += "Juni"
            break;   
            case '07':
            namabulan += "Juli"
            break;   
            case '08':
            namabulan +="Agustus"
            break;    
            case '09':
            namabulan += "September"
            break;    
            case '10':
            namabulan += "Oktober"
            break;    
            case '11':
            namabulan +="November"
            break;   
            case '12':
            namabulan +="Desember"
            break;                     
           default:
               break;
            }
            console.log (namabulan)
            

            var hasilSort = bulan.sort(function hasilSort(a, b) {return b-a})
            console.log (hasilSort)

            var hasilJoin = arr[3].split ("/")
            var hasilJoin2 = hasilJoin.join ('-') 
            console.log (hasilJoin2)

            var hasilSlice = arr[1].slice ("",15)
            console.log (hasilSlice)
           
            return bulan = ""
            }
                
            

    


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log (dataHandling2(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
