//create a function that prints the maximum number, minimum number and sum of elements of an array.


const integersArray = [1, 3, 5, 7, 9, 11];

const MaxMinSum = () => {
    console.log(Math.min(...integersArray))
    console.log(Math.max(...integersArray))
    
    let sum = 0

    for (let i=0; i < integersArray.length; i++)
    
    {sum += integersArray[i]};

    console.log(sum);

}

MaxMinSum();

