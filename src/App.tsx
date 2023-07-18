import React from "react";
import logo from "./logo.svg";
import "../src/assets/styles/styles.scss";
import EpicurePage from "./components/EpicurePage/EpicurePage";
import Footer from "./components/Footer/Footer";
import CompleteNavBar from "./components/CompleteNavBar/CompleteNavBar";
import TempComponent from "./components/TempComponent/TempComponent";
function App() {
  return (
    <div>
      <CompleteNavBar></CompleteNavBar>

      <EpicurePage></EpicurePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
