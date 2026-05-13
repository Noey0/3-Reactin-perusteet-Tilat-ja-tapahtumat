import Infolista from "./tehtava/Infolista";

function App() {
  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Listatehtävä</h1>

      <Infolista taulukko={tiedot} />
    </div>
  );
}

export default App;
