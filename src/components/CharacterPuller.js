import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "../App.css";

function CharacterPuller(props) {
  const { characters, setCharacters } = props;
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((response) => setCharacters(response.data))
      .catch((error) => console.log("Error!", error));
  }, [setCharacters]);
  return <div></div>;
}

export default CharacterPuller;
