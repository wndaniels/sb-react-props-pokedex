import "./Pokecard.css";

const Pokecard = (props) => {
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-body">
        <div>
          <h1 className="Pokecard-header">{props.name}</h1>
          <img src={img} alt="" className="Pokecard-img" />
          <p className="Pokecard-data">Type: {props.type}</p>
          <p className="Pokecard-data">EXP: {props.exp}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokecard;
