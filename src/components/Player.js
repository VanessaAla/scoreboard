import React from "react";

export default function Player(props) {
  return (
    <div>
      <li className="Player">
        <p>{props.name}</p>
      </li>
    </div>
  );
}
