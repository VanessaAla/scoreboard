import React from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        <Player name="Vanessa" />
        <Player name="Theuns" />
        <Player name="Lisa" />
        <Player name="Billie Bob" />
        <Player name="Vanessa" />
      </ul>
      <AddPlayerForm />
    </div>
  );
}
