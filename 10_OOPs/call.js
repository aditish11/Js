function SetUserName(username){
  this.username=username
  console.log('set user name called')


}

function createUser(username,email,password){
  SetUserName.call(this,username)
this.email=email
this.password=password
}

const newUser=new createUser("Ram","Ram@abcd.com","abcde")
console.log(newUser)