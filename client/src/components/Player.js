
import React, {Component} from 'react';
import axios from 'axios';

import AddPlayer from './AddPlayer';
import ListPlayers from './ListPlayers';

class Player extends Component {

  state = {
    players: []
  }

  componentDidMount(){
    this.getPlayers();
  }

  getPlayers = () => {
    axios.get('/players/all')
      .then(res => {
        if(res.data && res.data.players){
          this.setState({
            players: res.data.players
          })
        }
      })
      .catch(err => console.log(err))
  }

  deletePlayer = (id) => {

    axios.delete(`/players/${id}`)
      .then(res => {
        if(res.data){
          this.getPlayers()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { players } = this.state;

    return(
      <div>
        <h1>My player(s)</h1>
        <AddPlayer getPlayers={this.getPlayers}/>
        <ListPlayers players={players} deletePlayer={this.deletePlayer}/>
      </div>
    )
  }
}

export default Player;