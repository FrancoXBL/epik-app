import "./infoClientComponent.css"
export function InfoClient(){
    return (
        <div className="infoClient">
            <div className="infoClientBox">
            <input type="text" placeholder="Nombre cliente" />
            </div>
            <div className="infoClientBox">
                <input type="text" placeholder="Direccion" />
                <input type="text" placeholder="Altura" />
            </div>
        </div>
    )
}