import { WindowBurgerComponent } from "./components/window-burger-component/WindowComponent/WindowComponent";
import { AderesosComponent } from "./components/window-aderesos-component/AderesosSelect/WindowAderesosComponent";
import { InfoClient } from "./components/infoClientComponent/InfoClientComponent";
import { NavBar } from "./components/navBarComponent/NavBar";
import { TicketComponent } from "./components/ticketComponent/tiketComponent";
function App() {
  return (
    <>
      <NavBar />
      <InfoClient />
      <WindowBurgerComponent />
      <AderesosComponent />
      <TicketComponent />
    </>
  );
}

export default App;
