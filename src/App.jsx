import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShoppingBag from "./Components/Shopping/ShoppingBag";
import { useSelector } from "react-redux";

function App() {
  const currentView = useSelector(
    (state) => state.navigation.currentView
  );

  return (
    <>
      {currentView === "Cart" ? (
        <ShoppingBag />
      ) : (
        <HomePage />
      )}
    </>
  );
}

export default App;