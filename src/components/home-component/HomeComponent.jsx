import { WindowBurgerComponent } from "../window-burger-component/WindowComponent/WindowComponent";
import { AderesosComponent } from "../window-aderesos-component/AderesosSelect/WindowAderesosComponent";
import { InfoClient } from "../infoClientComponent/InfoClientComponent";
import { NavBar } from "../navBarComponent/NavBar";
import { TicketComponent } from "../ticketComponent/tiketComponent";
import { EndSaleButton } from "../endSaleComponent/EndSaleButtom";
import WindowSalesComponent from "../window-sales-component/windowSalesComponent";
export default function Home() {
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-bg-100 h-full text-text-100 font-sans"
    >
      <NavBar />
      <div className="wrapper ">
        <InfoClient />
        <EndSaleButton />
        <div className="flex gap-4 my-4">
          <WindowBurgerComponent />
          <AderesosComponent />
          <TicketComponent />
        </div>
        <WindowSalesComponent />
      </div>
    </div>
  );
}
