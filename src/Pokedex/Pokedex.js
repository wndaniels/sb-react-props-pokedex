import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
  return (
    <div className="Pokedex">
      <div className="Pokedex-body">
        {props.pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
