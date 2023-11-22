import { NavBar } from "../navBarComponent/NavBar"
export default function AdmComponent(){
    return(
        <>
        <NavBar button1={{route: "/", text:"Home"}} button2={{route: "/historial-ventas", text:"Historial Ventas"}}></NavBar>
        </>
    )
}