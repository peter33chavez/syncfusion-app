import "./App.css";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

//weather dashboard
//api weatherapi.com

function App() {
  return (
    <div className="App">
      <Dashboard />
      <SideBar />
    </div>
  );
}

export default App;
