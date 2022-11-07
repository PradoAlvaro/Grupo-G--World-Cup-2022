function createGame(player1, hour, player2) {
  return `  
   <li>
    <img src="./assets/${player1}.svg" alt="logo-${player1}" />
    <strong> ${hour} </strong>
    <img src="./assets/${player2}.svg" alt="logo-${player2}" />
  </li>
  `
}

function createCard(date, day, games) {
  return `  
   <div class="card">
     <h2> ${date} <span> ${day} </span></h2>
      <ul>
      ${games}
     </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "7:00", "cameroon") +
      createGame("uruguay", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "7:00", "serbia") +
      createGame("south-korea", "10:00", "ghana") +
      createGame("portugal", "13:00", "uruguay") +
      createGame("brazil", "16:00", "switzerland")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("portugal", "12:00", "south-korea") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("brazil", "16:00", "cameroon") +
      createGame("serbia", "13:00", "switzerland")
  )
