import { WindowBurgerComponent } from "./components/window-burger-component/WindowComponent/WindowComponent";
import { AderesosComponent } from "./components/window-aderesos-component/AderesosSelect/WindowAderesosComponent";
import { InfoClient } from "./components/infoClientComponent/InfoClientComponent";
import { NavBar } from "./components/navBarComponent/NavBar";
import { TicketComponent } from "./components/ticketComponent/tiketComponent";
function App() {
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-bg-100 h-full text-text-100 font-sans"
    >
      <NavBar />
      <div className="wrapper ">
        <InfoClient />
        <div className="flex gap-4 my-4">
          <WindowBurgerComponent />
          <AderesosComponent />
          <TicketComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
