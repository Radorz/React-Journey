

function greet(name: string) : string {
    return `Hola ${name}`;
}


const greet2 = (name: string): string => {
    return `Hola ${name}`;
}

const message = greet('Hola');
const message2 = greet('Hola');
console.log(message, message2);


interface User {
    uid:string;
    username: string;
}


function getUser() : User {
    return{
        uid: 'ABC-123',
        username: 'Pajita tox'
    }
}


const getUser2 = () =>{
     return{
        uid: 'ABC-123',
        username: 'Pajita tox'
    }
}

const user = getUser();
const user2 = getUser2();
console.log(user, user2);