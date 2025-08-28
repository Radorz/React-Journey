import  {heroes, type Hero, Owner}  from "./data/heroes.data"

const getHeroeById = (id: number): Hero | undefined => {
const hero = heroes.find((hero)=>{
    return hero.id === id;
})

// if(!hero){
//     throw new Error('No existe un Heroe id>')
// }
return hero;

}

 export const getHeroeByOwner  = ( owner: Owner): Hero[] => {
    const hero = heroes.filter((hero)=>{
        return hero.owner === owner;
})
return hero;
}


console.log(getHeroeById(7));