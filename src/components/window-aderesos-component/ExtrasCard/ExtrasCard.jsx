export function ExtrasCard({extraItem}){
    return (
        <button>{extraItem.name} - <span>{extraItem.price}</span></button>
    )
}