import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemonObj => {
          return <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj} />;
        })}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
