import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Vanessa", score: 11 },
    { id: 2, name: "Theuns", score: 14 },
    { id: 3, name: "Lisa", score: 4 },
    { id: 4, name: "Billie bob", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score");

  const players_sorted = [...players].sort(
    sort_by === "score" ? compare_score : compare_name
  );

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,

          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    //console.log("Log the id of the player:", id);
    set_players(new_players_array);
  };

  const resetScores = () => {
    const new_players_array = players.map((player) => ({
      ...player,
      score: 0,
    }));

    set_players(new_players_array);
  };

  const randomScores = () => {
    const new_players_array = players.map((player) => ({
      ...player,
      score: Math.floor(Math.random() * Math.floor(101)),
    }));

    set_players(new_players_array);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScores}>Reset</button>
      <button onClick={randomScores}>Random Scores</button>
      <p>Player's Scores:</p>
      {players_sorted.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      ))}
      <AddPlayerForm />
    </div>
  );
}
