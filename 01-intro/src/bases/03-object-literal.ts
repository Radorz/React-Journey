 
interface Person {
    firstName: string;
    lastName:  string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = { 
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC12233',
        city: 'New York'
    }
}






// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Luis';
// spiderman.lastName = 'Parker'

// console.log(ironman, spiderman)