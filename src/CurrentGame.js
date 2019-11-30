import React from 'react'
import Players from './Players'

class CurrentGame extends React.Component {
  render() {
    const game = this.props.game;
    const {paidPlayers, paidPlayersRemaining, averageStack} = game;
    return (
      <div>
        <div>
          <span>Players: {paidPlayersRemaining}/{paidPlayers} | Avg Stack: {averageStack}</span>
        </div>
        <div>
          <Players value={game.players}/>
        </div>
      </div>
    );
  }
}

export default CurrentGame
