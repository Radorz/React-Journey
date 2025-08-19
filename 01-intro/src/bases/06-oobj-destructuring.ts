const person= {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const {name, key, age} = person;

console.log({name, age, key})

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}


const useContext = ({ key, name, age, rank}: Hero) => { 
return {
    keyName: key,
    user: {
        name,
        age,
    },
    rank
}
};