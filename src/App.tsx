import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./Common/Navbar/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import { Suspense } from "react";
import NotionAndContact from "./Common/notionAndContact";

function App() {
  return (
    <div>
      <Suspense fallback="loading...">
        <NavBar />
        <div className="mainContainer">
          <div className="mainContainer__page">
            <Home />
          </div>
        </div>
        <NotionAndContact />
        <SideBar />
      </Suspense>
    </div>
  );
}

export default App;
