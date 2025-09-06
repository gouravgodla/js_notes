const score: Array<number> = [];
const name: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// the main one
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({})

//array

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex];
}

//arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};

//class
interface Database {
  connection: string;
  username: string;
  password: string;
}
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// anotherFunction(3, {});

interface Quiz {
  name: string;
  type: string;
}
interface course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public card: T[] = [];

  addToCard(product: T) {
    this.card.push(product);
  }
}
