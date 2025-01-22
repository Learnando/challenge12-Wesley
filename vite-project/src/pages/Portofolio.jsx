import React from "react";
import "../styles/Portofolio.css";

export default function Portofolio() {
  return (
    <div class="flex-container">
      <section class="flex-item surf-report">
        <div>
          <h3>Surf Repot</h3>
          <h4>MERN stack</h4>
        </div>
      </section>

      <section class="flex-item led-wall">
        <div>
          <h3>LED wall</h3>
          <h4>Node/loT</h4>
        </div>
      </section>

      <section class="flex-item  react-calc">
        <div>
          <h3>Calculator</h3>
          <h4>React/Javascript</h4>
        </div>
      </section>

      <section class="flex-item pastel-puzzles">
        <div>
          <h3>Pastel Puzzels</h3>
          <h4>MERN stack</h4>
        </div>
      </section>

      <section class="flex-item run-buddy">
        <div>
          <h3>Run Buddy</h3>
          <h4>MERN stack</h4>
        </div>
      </section>
    </div>
  );
}
