import { thanks as saludos, thanks } from "./listThanks"

export function TicketSaludo() {

    const fraseAleatoria = thanks[Math.floor(Math.random() * thanks.length)];

    return(
        <p className="frase">{fraseAleatoria}</p>
    )
}