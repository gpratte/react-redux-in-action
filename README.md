# Wire up React and Redux

This is a toy project to wire up React and Redux. 

Run the app
* npm install
* npm start

And then click on the Add Player button.
That will dispatch an ADD_PLAYER action that the reducer will add to the player array in the game.

The CurrentGameConnector _mapStateToProps_ will simply get the game from the store and will 
cause the CurrentGame to update.
