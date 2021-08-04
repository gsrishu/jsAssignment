function reverse(){
	var sentence = 'Bangalore is the best Indian City';
	var str = '';
	var temp = ' ';
	for(let i = sentence.length-1; i>=0;i--){
		if(sentence[i] == ' '){
		 str += temp.split('').reverse().join('');
		 temp=' ';
		}else{
			temp += sentence[i];
			
		}
		
		
	}
   str += temp.split('').reverse().join('');;
	console.log(str);
}