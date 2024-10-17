import "./App.css";
import LeftPanel from "./components/organisms/LeftPanel";
import RightPanel from "./components/organisms/RightPanel";

function App() {
  return (
    <main className="app-container">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}

export default App;
