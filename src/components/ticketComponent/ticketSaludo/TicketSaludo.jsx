import { useEffect, useState } from "react";
import { thanks as saludos, thanks } from "./listThanks"

export function TicketSaludo() {

    const [frase, setFrase] = useState('')

    useEffect(() => {
        setFrase(thanks[Math.floor(Math.random() * thanks.length)])
    }, [])

    return(
        <p className="font-mono">{frase}</p>
    )
}