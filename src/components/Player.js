import React from "react";

export default function Player({ name, score }) {
  return (
    <div>
      <li className="Player">
        {name} (score: {score})
      </li>
    </div>
  );
}
