import Kayttajakortti from "./tehtava/Kayttajakortti";

function App() {
  return (
    <div>
      <Kayttajakortti nimi="Noah" lista={["React", "JavaScript", "CSS"]} />
    </div>
  );
}

export default App;
