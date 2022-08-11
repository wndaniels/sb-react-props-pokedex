import pokemon from "../pokemon";
import Pokedex from "../Pokedex/Pokedex";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <h1 className="App-header">Pokedex</h1>
      <Pokedex pokemon={pokemon} />
    </div>
  );
};

export default App;
