import "./App.css";
import CenteredCard from "./components/CenteredCard/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header App-logo">
        <CenteredCard>Olá, kenzinho,</CenteredCard>
        <CenteredCard>O mundo não gira</CenteredCard>
        <CenteredCard>Ele capota</CenteredCard>
      </header>
    </div>
  );
}

export default App;
