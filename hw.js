//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (str, list) =>{
    for (let i = 0; i < list.length; i++) {
        let name = list[i].toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if (str.includes(name)) {
            console.log("Matched " + name);
        }
        else {
            console.log("No matches for " + name);
        }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.


*/

let given_arr = [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) =>{
    for (let i = 0; i < arr.length;) {
        if (arr[i] * 2 > 50) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
}

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...
replaceEvens(given_arr)
console.log(given_arr)


// Codewars problem #1 Convert a string to an array
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/python
let string_to_array = (s) =>{
    return s.split(' ');
}

console.log(string_to_array("Hi my name is Taeho"))

// Codewars problem #2 Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/python
let twice_as_old = (dad_years_old, son_years_old) =>{
    return Math.abs(dad_years_old - son_years_old * 2)
}

console.log(twice_as_old(36,7))