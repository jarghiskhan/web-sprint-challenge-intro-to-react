import React, { useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import CharacterPuller from "./CharacterPuller";
import "../App.css";

const CharacterDiv = styled.div`
    display: flex;
    margin: auto 3%; 
    padding: 1%;
    flex-direction: column;
    justify-content: space-evenly;
`

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharacterDiv>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {/* {characters.map((character, index) => (
        <Character key={index} character={character} />
      ))} */}
      {characters.map((element, index) => (
        <Character key={index} character={element}></Character>
      ))}
      <CharacterPuller characters={characters} setCharacters={setCharacters} />
    </CharacterDiv>
  );
};

export default Characters;
