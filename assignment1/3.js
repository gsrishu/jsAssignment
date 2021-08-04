function replace(){
	var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday'];
	let count=0;;
	for(let i = 0; i <workingDays.length;i++){
		if(workingDays[i]=='Sunday' || workingDays[i]=='Saturday'){
		 workingDays[i] = 'Holiday';
		}
		
		
	}
	console.log(workingDays);
}