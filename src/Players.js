import React from 'react'
import store from './store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class Players extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddPlayer: false
    };
  }

  toggleModal = (name, value) => {
    const newState = {...this.state};
    newState[name] = value;
    this.setState(newState);
  };


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

        <Modal show={this.state.showAddPlayer} onHide={() => this.toggleModal('showAddPlayer', false)}>
          <Modal.Body>
            <Form>
              <Form.Group controlId="addPlayerId">
                <Form.Label>Player</Form.Label>
                <Form.Control as="select">
                  <option>Abe Adams</option>
                  <option>Bjorn Biffel</option>
                  <option>Cameron Case</option>
                </Form.Control>
              </Form.Group>
              <Form.Check inline
                          type={'checkbox'}
                          id={'buyInId'}
                          label={'Buy-In'}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'tocId'}
                          label={'Annual TOC'}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'qtocId'}
                          label={'Quarterly TOC'}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.toggleModal('showAddPlayer', false)}>
              Cancel
            </Button>
            {/*<Button variant="primary" onClick={() => this.toggleModal('showAddPlayer', false)}>*/}
            {/*  Add Player*/}
            {/*</Button>*/}
            <Button variant="primary" onClick={() => {
              // this.toggleModal('showAddPlayer', false);
              this.publish();
            }}>
              Add Player
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="primary" onClick={() => this.toggleModal('showAddPlayer', true)}>
          Add Player
        </Button>

        {/*<button onClick={() => this.publish()}>*/}
        {/*  Add Player*/}
        {/*</button>*/}
      </div>
    );
  }
}

export default Players
