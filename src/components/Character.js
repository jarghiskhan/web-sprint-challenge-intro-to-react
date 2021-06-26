// Write your Character component here
import React from "react";
import styled from "styled-components";
import "../App.css";

const CharacterDiv = styled.div`
    width: 100%;
    text-align:center;
    outline: 8px solid rgba(102,164,74,0.5);
    margin-bottom: 3%;
`
const NameHeader = styled.div`
    float:left;
    padding-left: 1%;
 `
const BirthYearDiv = styled.div`
    float:right;
    padding-right: 1%;
`
function Character(props) {
  const { character } = props;

  return (
    <CharacterDiv>
      <NameHeader><h2>Name: {character.name}</h2></NameHeader>  
      <BirthYearDiv><h2>{character.birth_year}</h2></BirthYearDiv>
    </CharacterDiv>
  );
}

export default Character;
