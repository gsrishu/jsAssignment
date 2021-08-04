function Person(f,l){
		 this.firstName = f;
		 this.lastName = l;
	     this.fullName = () => `${this.firstName} ${this.lastName}`;	 
	
}
let obj = new Person('Gaurav', 'Singh');
console.log(obj.fullName());
	