import React from "react";

const Contact = () =>
(
  <div>
    <center><h1><i>CHERUBIM</i> Sample Levels</h1></center>
    <pre><h2>Basic Rules</h2></pre>
    <p><b>Initial Angel Placement</b>
    <ul>
    <li>All angels begin the game by standing on one of the starting room tiles.</li>
    </ul>

    <br />
    <b>Movement</b>
    <ul>
      <li>All cherubs can move in the 8 basic directions: North, south, east, west, and diagonally.</li>
      <li>All cherubs can walk indefinitely.</li>
      <li>All cherubs (except the Athlete) can fly over 2 space gaps.  Russel the Athlete can fly indefinitely.</li>
      <li>All cherubs can throw other units 2 spaces.</li>
      <li>Strong wind prevents cherubs from flying into or while in that space, but units can still walk in or be thrown into.</li>
    </ul>
    <br />
    <b>Interaction</b>
    <ul>
      <li>All cherubs can activate levers, buttons, and doors, and objects unless otherwise noted.</li>
      <li>Friendly units can share space with one another.  (Collision detection is off in this case.)</li>
      <li>Units cannot move through/over walls.  Thus, an angel cannot fly over a wall, nor can an angel throw another angel over a wall.</li>
    </ul>
    <pre><h2>Winning & Losing</h2></pre>
    <b>Winning: Required and Optional Objectives</b>
    <ul>
      <li>To win, complete all required objectives for a level and any number of optional objectives.</li>
      <li>Each level has at least 1 required and 2 optional objectives.</li>
      <li>Completing more objectives requires more effort but awards a higher rank.  For this demo, ranks are only for prestige; however, in the full game, completing enough levels on Angel or Archangel rank will grant an achievement.</li>
      <ul>
        <li><u>CHERUB RANK</u>: Complete only required.</li>
        <li><u>ANGEL RANK</u>: Complete required and some optional.</li>
        <li><u>ARCHANGEL RANK</u>: Complete everything.</li>
      </ul>
    </ul>
    <b>Losing</b>
    <ul>
      <li>To lose, give up before completing a level.</li>
    </ul>
    <b>Required Objective</b>
    <ul>
      <li>Move all units from the start to the exit.</li>
    </ul>
    <b>Optional Objectives (Angel Angle 1)</b>
    <ul>
      <li>Place no more than 2 floating platforms.</li>
      <li>Collect all collectible halos.</li>
      <li>Complete the level within 65 seconds.</li>
    </ul>
    <b>Optional Objectives (Angel Angle 2)</b>
    <ul>
      <li>Place no more than 7 floating platforms.</li>
      <li>Collect all collectible halos.</li>
      <li>Complete the level within 100 seconds.</li>
    </ul>
    <pre><h2>RULES FOR IM, THE HERO CHERUB</h2></pre>
    <b>Special Powers:</b> Can activate plot objects.<br />
    <b>Movement</b>
    <ul>
      <li>Indefinite walking.</li>
      <li>Can fly 2 over space gaps.</li>
      <li>Can lift and throw other cherubs 2 spaces.</li>
    </ul>
    <pre><h2>RULES FOR TONY, THE SCHOLAR CHERUB</h2></pre>
    <b>Special Powers:</b> Can activate secret objects.<br />
    <b>Movement</b>
    <ul>
      <li>Indefinite walking.</li>
      <li>Can fly 2 over space gaps.</li>
      <li>Can lift and throw other cherubs 2 spaces.</li>
    </ul>
    <pre><h2>RULES FOR RUSSEL, THE ATHLETE CHERUB</h2></pre>
    <b>Special Powers:</b> Can fly indefinitely.<br />
    <b>Movement</b>
    <ul>
      <li>Indefinite walking.</li>
      <li>Indefinite flight.</li>
      <li>Can lift and throw other cherubs 2 spaces.</li>
    </ul>
    <pre><h2>RULES FOR ADELLE, THE ENGINEER CHERUB</h2></pre>
    <b>Special Powers:</b> Can place platforms on water (max 3 total platforms) which all cherubs can stand on.  Placing a platform beyond this limit removes the least recently placed platform.<br />
    <b>Movement</b>
    <ul>
      <li>Indefinite walking.</li>
      <li>Can fly 2 over space gaps.</li>
      <li>Can lift and throw other cherubs 2 spaces.</li>
    </ul>
    </p>
  
  <pre><h2>ANGEL ANGLE 1</h2></pre>
  <center><img src = "https://i.imgur.com/UxsLgZV.png" /></center>

  <br/>
  <br/>
  <pre><h2>ANGEL ANGLE 2</h2></pre>
  <center><img src = "https://i.imgur.com/aKbbV9m.png" /></center>
  </div>
);

export default Contact;