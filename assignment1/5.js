class Person{
	 constructor(f,l){
		 this.firstName = f;
		 this.lastName = l;
	 }
	 fullName(){
		 return `${this.firstName} ${this.lastName}`;	 
	 }
	
}
let obj = new Person('Gaurav', 'Singh');
console.log(obj.fullName());
	
	