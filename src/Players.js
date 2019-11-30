import React from 'react'
import store from './store'

class Players extends React.Component {

  renderPlayers(players) {
    return players.map((player, index) => {
      const {
        id, firstName, lastName, buyInCollected, rebuyAddOnCollected, annualTocCollected,
        quarterlyTocCollected, points, finish, knockedOut
      } = player;
      return (
        <tr key={id}>
          <td className="knocked-out">{knockedOut ? 'x' : ''}</td>
          <td>{finish}</td>
          <td>
            <button>
              {firstName}{(firstName && lastName) ? ' ' : ''}{lastName}
            </button>
          </td>
          <td>{buyInCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{rebuyAddOnCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{annualTocCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{quarterlyTocCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{points ? points : ''}</td>
        </tr>
      )
    })
  }

  publish() {
    store.dispatch({type: 'ADD_PLAYER', player: {
        id: 24,
        playerId: 15,
        gameId: 3,
        firstName: 'Josh',
        lastName: 'Bygosh',
        points: 42,
        finish: 9,
        knockedOut: true,
        buyInCollected: 40,
        rebuyAddOnCollected: null,
        annualTocCollected: 20,
        quarterlyTocCollected: null,
        chop: null
      }})
  }

  render() {
    const players = this.props.value;

    return (
      <div>
        <h1>Players</h1>
        <table>
          <thead>
          <tr>
            <th></th>
            <th>Fin</th>
            <th>Name</th>
            <th>Buy<br/>In</th>
            <th>Re<br/>Buy</th>
            <th>TOC</th>
            <th>QTOC</th>
            <th>Pts</th>
          </tr>
          </thead>
          <tbody>
          {this.renderPlayers(players)}
          </tbody>
        </table>

        <button onClick={() => this.publish()}>
          Add Player
        </button>
      </div>
    );
  }
}

export default Players
