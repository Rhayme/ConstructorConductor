//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age){
    this.name = name;
    this.age = age;

}

//Now create three instances of Person with data you make up

//code here
var jhon = new Person('Jhon', 25);
var karl = new Person('Karl', 18);
var anni = new Person('Anni', 23);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

//code here
function sayName(){
    alert(this.name);
   // return this.name;
}
function sayAge() {
    alert(this.age);
   // return this.age;
}
sayName.call(jhon);
sayName.call(karl);
sayName.call(anni);
console.log('My name is ' + sayName.call(jhon) + ' and my age is ' + sayAge.call(jhon));