// class User{
//     public email:string
//     private name:string
//     private readonly city:string="jaipur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;

//         this.city
//     }
// }

// const gourav =new User('gg@.com','gourav')

// gourav.city

class User {
  //   private _courseCount = 1;
  protected _courseCount = 1;

  private readonly city: string = "Jaipur";
  constructor(
    public email: string,
    private name: string // private userId:string
  ) {}

  private delteToken() {
    console.log("Token deleled");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
}

const gourav = new User("gg@.com", "gourav");

// gourav.name

// gourav.delteToken();
