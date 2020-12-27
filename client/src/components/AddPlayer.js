import React, { Component } from 'react';
import axios from 'axios';

class AddPlayer extends Component {
    
        state = {
            player: {
              name: ""
            }
        }
    

    addPlayer = () => {
        const player = this.state.player
    
        if(player.name && player.name.length > 0){
          axios.post('/players/new', player)
            .then(res => {
              if(res.data){
                this.props.getPlayers();
                this.setState({player: {}})
              }
            })
            .catch(err => console.log(err))
        } else {
          console.log('input field required')
        }
      }
    
      handleChange = (e) => {
        this.setState({
          player: {
            name : e.target.value
          }
        })
      }
    
      render() {
        let { player } = this.state;
        return (
          <div>
            <input type="text" onChange={this.handleChange} value={player.name} />
            <button onClick={this.addPlayer}>add player</button>
          </div>
        )
      }
}

export default AddPlayer