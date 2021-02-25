import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Vanessa", score: 11 },
    { id: 2, name: "Theuns", score: 14 },
    { id: 3, name: "Lisa", score: 4 },
    { id: 4, name: "Billie bob", score: 42 },
  ]);

  const players_sorted = [...players].sort(compare_score);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {players.map((player) => (
        <Player key={player.id} name={player.name} score={player.score} />
      ))}
      <AddPlayerForm />
    </div>
  );
}
