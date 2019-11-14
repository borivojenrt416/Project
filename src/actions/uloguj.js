import {ULOGUJ} from './types'
import {AZURIRAJKORISNIKA} from './types'

export const uloguj=(email,lozinka)=>dispatch=>{
    console.log(email,lozinka)
    fetch(`http://localhost:4000/korisnici/${email}/${lozinka}`)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:ULOGUJ,
        payload: podatak.data
    }));      

}

export const azuriraj = (ime,prezime,email,sifra,telefon) =>dispatch=>{
    fetch(`http://localhost:4000/korisnici/${ime}/${prezime}/${email}/${sifra}/${telefon}`)
    .then(response=>response.json())
    .then(k=>dispatch({
        type:AZURIRAJKORISNIKA
    }))
}

export const odjavi = () =>dispatch=>{
    console.log("POZVANO ODJAVI SE")
    dispatch({
        type:AZURIRAJKORISNIKA,
        payload:null
    })
}