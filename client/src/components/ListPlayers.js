import React from 'react';

const ListPlayers = ({ players, deletePlayer }) => {

  return (
    <ul>
      {
        players &&
          players.length > 0 ?
            (
              players.map(player => {
                return (
                  <li key={player._id} onClick={() => deletePlayer(player._id)}>{player.name}</li>
                )
              })
            )
            :
            (
              <li>No player(s) left</li>
            )
      }
    </ul>
  )
}

export default ListPlayers