class User{
  constructor(email,password){
    this.email=email
    this.password=password
  }

  get password(){
    return `${this._password}abcd`
  }
  set password(value){
    this._password=value.toUpperCase()
  }
}

const ram= new User(" ram@gmail.com", '123')
console.log(ram.password)


