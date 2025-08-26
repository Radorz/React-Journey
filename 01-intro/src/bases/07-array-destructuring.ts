const  characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , Trunks] = characterNames;

console.log(Trunks);



const returnArrayfn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnArrayfn ()

console.log(letters, numbers);


const useState =  (value: string) => {
    return [
    value,
    (value: string) => {
        console.log(value)
}
]as const;
}
const [name, setName] = useState('Goku');
console.log(name);       
setName('Vegeta'); 
