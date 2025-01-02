import "./App.css";
import Logo from "../src/Images/345.png";
import Home from "./Pages/home";

function App() {
  return (
    <>
      <head>
        <link rel="icon" type="image/png" href={Logo} />
        <title>Weater App</title>
      </head>
      <Home />
    </>
  );
}

export default App;
