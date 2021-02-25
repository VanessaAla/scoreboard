import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Vanessa", score: 11 },
    { id: 2, name: "Theuns", score: 14 },
    { id: 3, name: "Lisa", score: 4 },
    { id: 4, name: "Billie bob", score: 42 },
  ]);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {players.map(
        (player) => (
          <Player name={player.name} />
        )
        //console.log("player = ", player)
      )}
      <AddPlayerForm />
    </div>
  );
}
