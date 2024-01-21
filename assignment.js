// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

function strHasY(s)
{
    console.log(s.toLowerCase().includes('y') ? "YES" : "NO")
}

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

function getFactorial(num)
{
    if (num <= 1)
    {
        return num;
    }
    return num * getFactorial(num - 1)
}

//3. You have an array of students
let studentList = 
[
  { name: "Mike", marks: [80, 50, 60, 100] },
  { name: "Daniel", marks: [40, 50, 100, 100] },
  {
    name: "Stacy",
    marks: [20, 100, 50, 70],
  },
];

function getHighestAverageStudent(studentL) 
{
    let highestMarks = [];
    let largestAv = 0;
    for(let i of studentL)
    {
        for(let j in studentL["marks"])
        {
            let temp = j.reduce((total, i) => {total += i})
            highestMarks.concat(temp);
            largestAv = largestAv < temp ? temp : largestAv
        }
    }    
    return studentL[highestMarks.indexOf(largestAv)]
}

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4
function getHighestOccurence(arr)
{
    let found = {};
    let largest = [0,0];
    for(let i of arr)
    {
        if(!found[i])
        {
            found[i] = 0;
        }
        found[i]++;
    }
    for(let i in found)
    {
        largest = found[i] > largest[1] ? [i, found[i]] : largest
    }
    return largest[0];
}

//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function getUnique(arr)
{
    let found = {};
    for(let i of arr)
    {
        if(!found[i])
        {
            found[i] = 0;
        }
        found[i]++;
    }
    for(let i in found)
    {
        if(found[i] == 1)
        {
            return found[i]
        }
    }
    return "none"
}

//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function palindromeFinder(str)
{
    return str === str.split("").reverse().join("");
}

function palindromes(arr)
{
    return arr.filter(palindromeFinder);
}



strHasY("SOMEKINDOF STRING HERE THAT DOES NOT HAAAAVE the letter");
strHasY("SOMEKINDOF STRING HERE THAT DOESyyyyyyyy HAAAAVE the letter");
console.log(getFactorial(5));
console.log(getHighestAverageStudent(studentList));
console.log(getHighestOccurence([ 20, 4, -10, 4, 11, 20, 4, 2]))
console.log(getUnique([20, 20, 11, 4, 11, 20, 2, 4]))
console.log(palindromes(['abc', 'aba', 'ccc', 'dca', 'a']))