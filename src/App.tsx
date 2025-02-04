import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./Common/Navbar/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import { Suspense, useEffect, useState } from "react";
import NotionAndContact from "./Common/NotionAndContact";
import NotResponsiveMessage from "./pages/NotResponsiveMessage";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <NotResponsiveMessage />
      ) : (
        <Suspense fallback="loading...">
          <SideBar />
          <NavBar />
          <div className="mainContainer">
            <div className="mainContainer__page">
              <Home />
            </div>
          </div>
          <NotionAndContact />
        </Suspense>
      )}
    </div>
  );
}

export default App;
