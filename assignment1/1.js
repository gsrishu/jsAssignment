function minMax(){
	var numbers = [7,3,5,6,8, 4];
	let ma=numbers[0],mi=numbers[0];
	for(let i = 1; i <numbers.length;i++){
		ma = Math.max(ma,numbers[i]);
		mi = Math.min(mi,numbers[i]);
	}
	console.log(ma,mi);
}

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));