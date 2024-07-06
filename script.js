//  program 1
var number = +prompt("enter a number to find its tabel");
console.log("the table of the number" + number + "is ")
for (var i = 1; i <= 10; i++)
    {
        console.log(number + "*" + i + "=" + number * i);
        document.write(number + "*" + i + "=" + number * i)
    }
// program 2
var arr1 = [];
for (var i = 0; i < 5; i++)
    {
        arr1[i] = +prompt("enter value");
    }
var sum = 0;
for (var i = 0; i < 5; i++)
    {
     sum = sum + arr1[i];   
    }
    console.log(" the array is " + arr1);
    console.log( " the sum of the array element" + sum);
    
// program 3
var arr2 = [];
for (var i = 0; i < 5; i++)
    {
        arr2[i] = +prompt("enter value");
    }
var greater = arr2[0];
for (var i = 0; i < arr2.length; i++)
    {
        if(arr2[i] > greater)
            {
                greater = arr2[i];
            }
    }
console.log("the greater number in array is " + greater);
// // program 4



