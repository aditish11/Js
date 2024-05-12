class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`Usename is ${this.username}`)
  }


}


class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course is added by ${this.username}`);
  }
}

const mathsTeacher= new Teacher("Ram","Ram@gmail.com",'123')
mathsTeacher.addCourse()

const engTeacher= new User('Shyam','Shyam@gmail.com','2345')
engTeacher.logMe()
mathsTeacher.logMe()


console.log(mathsTeacher instanceof Teacher)
console.log(engTeacher instanceof User)

