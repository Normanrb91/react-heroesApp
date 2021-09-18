import { heroes } from '../data/heroes';


export const getHeroesByName= (text = '') =>{
    text = text.toLocaleLowerCase();
    
    if(text === ''){
        return [];
    }else{
        return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(text));
    }   
}