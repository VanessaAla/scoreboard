import React from "react";

export default function Player({ name }) {
  return (
    <div>
      <li className="Player">
        <p>{name}</p>
      </li>
    </div>
  );
}
