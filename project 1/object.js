class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

var userone = new User("ryu@ninjas.com", "ryu");
var usertwo = new User("yoshi@mariokorp.com", "yoshi");

userone.login().updateScore().updateScore().logout();
usertwo.login().updateScore().updateScore().logout();