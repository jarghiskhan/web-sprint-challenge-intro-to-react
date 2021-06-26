// Write your Character component here
import React from "react";
import styled from "styled-components";
import "../App.css";

const CharacterNameDiv = styled.div`
    display:flex;
    align-content: center;
`

function Character(props) {
  const { character } = props;

  return (
    <div>
      <h2>Name: {character.name}</h2>
      <span>{character.birth_year}</span>
      <div></div>
    </div>
  );
}

export default Character;
