"use strict"

// Task 1

var arrayWord = ["Кот", "Собака", "Жираф"];
function searchArrayWord(array, word) {
    for (var i = 0; i < word.length; i++) {
        if (array[i] === word) return true
    }
    return false;
}

console.log(searchArrayWord("Котя", arrayWord));


// Task 2

var arr = [1, 2, 3, 7, 6, 9];
function arrifm(arr) {
    var all = 0;
    for (var i = 0; i < arr.length; i++){
        all += arr[i];
    }
    return all / arr.length;
}

console.log(arrifm(arr));

// Task 3

var arr2 = [1, 3, 5, 6, 7, 9];

function reverse(arr) {
    var arr3 = [];
    for (var i = 0; i < arr.length; i++){
        arr3[i] = arr[arr.length - 1 - i];
    }
    return arr3;
}
arr2 = reverse(arr2)
console.log(arr2);


// Task 4

var obj = {
    "Html" : "html",
    "CSS" : "css",
    "JS" : "ECMA"
    
};

console.log(Object.keys(obj));


// Task 5

var obj2 = {
    "name" : "",
    "phone" : "",
    "addres" : "",
    "sum" : "",
    "weight" : "",
    "allProd" : {
        1: {
            "nameProd" : "Чашка",
            "price" : 100,
            "prodWeight" : 200
        },
        2: {
            "nameProd" : "Ложка",
            "price" : 30,
            "prodWeight" : 100
        },
        3: {
            "nameProd" : "Чайник",
            "price" : 550,
            "prodWeight" : 2000
        },
        4: {
            "nameProd" : "Кружка",
            "price" : 150,
            "prodWeight" : 400
        }
    }


};
console.log (obj2)