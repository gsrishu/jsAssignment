function findDays(){
	var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday'];
	let count=0;;
	for(let i = 0; i <workingDays.length;i++){
		(workingDays[i]!='Sunday' && workingDays[i]!='Saturday')?count++:count;
		
	}
	console.log(count);
}