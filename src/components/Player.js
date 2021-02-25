import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <div>
      <li className="Player">
        <p>
          {props.name} (score: {props.score})
          <button onClick={onClickIncrement}>increment</button>
        </p>
      </li>
    </div>
  );
}
