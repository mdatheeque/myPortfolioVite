import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./Common/Navbar/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import { Suspense } from "react";
import NotionAndContact from "./Common/notionAndContact";

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
