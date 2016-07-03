function sortNumber(a,b){
	return a-b;
}
function search(array,min,max,target){
	if(max>=min){
		var average = (max+min)/2;
		guess = Math.floor(average);
		console.log(guess,min,max);
		if(array[guess] === target){
			return guess;
		}else if(array[guess]<target){
			min = guess+1;
			search(array,min,max,target);
		}else if(array[guess]>guess){
			max = guess-1;
			search(array,min,max,target);
		}
	}else{
		return -1;
	}
}
// @param array target
// @return index   
var binarySearch = function(array,target){
	var min = 0;
	var max = array.length - 1;
	var guess;
	search(array,min,max);
};


// test
var arr = [1,9,8,20,17,3,10,15,16];
var index;
arr.sort(sortNumber);
console.log(arr);
index = binarySearch(arr,17);
console.log(index);