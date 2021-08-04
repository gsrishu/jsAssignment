function r(s){
  var temp = '';
  for(let i = s.length-1; i>=0;i--){
    temp += s[i];
  }
  return temp;
}
function reverse(){
	var sentence = 'Bangalore is the best Indian City';
	var str = '';
	var temp = ' ';
	for(let i = sentence.length-1; i>=0;i--){
		if(sentence[i] == ' '){
		 str += r(temp);
		 temp=' ';
		}else{
			temp += sentence[i];
			
		}
		
		
	}
   str += r(temp);
	console.log(str);
}