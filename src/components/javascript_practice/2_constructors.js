class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;

    }
}

let userOne = new User ("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first) // undefined
console.log(userOne.f);  // paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"  }

