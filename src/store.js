import { createStore } from 'redux'
import reducer from './gameReducers'

const game = {
  id: 12345,
  date: 1574003637471,
  hostName: "Bob's your uncle",
  transportRequired: false,
  totalCollected: 1600,
  totalCombinedTocCalculated: 300,
  kittyCalculated: 10,
  prizePotCalculated: 770,
  paidPlayers: 20,
  paidPlayersRemaining: 18,
  averageStack: 85220,
  clockId: 234,
  payouts: [],
  players: []
}

const store = createStore(reducer, game);

export default store;
