import "../src/assets/styles/styles.scss";
import EpicurePage from "./components/EpicurePage/EpicurePage";
import Footer from "./components/Footer/Footer";
import CompleteNavBar from "./components/CompleteNavBar/CompleteNavBar";
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
