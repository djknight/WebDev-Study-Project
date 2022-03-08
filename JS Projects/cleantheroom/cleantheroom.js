// Question 1: Clean the room function: given an input
// of , make a function 
// that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return:
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//  Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
function clean(arr) {

    let sort = arr.sort((a, b) => a - b);

}