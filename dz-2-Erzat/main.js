// var arr = [10, 20, 30, 50, 235, 3000]
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//     var ferstItem = String(arr[i])[0]
//     if (ferstItem === '1' || ferstItem === '2' || ferstItem || '5') {
//         console.log(arr[i]);
        
//     }

// }

var arr = [10,20,30,50,235,3000]

console.log(arr)

for (var i = 0; i < arr.length; i++){
    var ferstItem = String(arr[i])[0]

    if (ferstItem === '1' || ferstItem === '2' || ferstItem === '5'){
        console.log(arr[i])
    }
}

for (var i = 20; i >= 0; i--) {
    console.log(i)
}

var colors = {
    red: 'красный',
    yellow: 'желтый',
    green: 'зеленый',
}  
var color = prompt('введите цвета светофора').toLocaleLowerCase().trim()

switch (color) {
    case colors.red:
        alert('stop')
        break;
    case colors.yellow:
        alert('wait')
    break;    
    case colors.green:
        alert('go')
    break;      
    default: alert('введите цвет светофора')
    break;
}