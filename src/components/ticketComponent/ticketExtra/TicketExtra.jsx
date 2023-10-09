
export function TicketExtra({ listTicketExtras }){


    if(listTicketExtras.length === 0){
        return(
            <>
            <hr />
            <p>Sin extras!</p>
            </>
        )
    }

    return (
        <>
        <hr />
        {listTicketExtras.map((extra) => (
            <p>{extra.name} - {extra.serving} - ${extra.price}</p>
        ))}
        </>
    )
}