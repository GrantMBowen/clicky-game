import React, { Component } from 'react';
// import logo from './logo.svg';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import './App.css';

class App extends Component {

    state = {
      cards,
      score: 0,
      highscore: 0
    };

    gameOver = () => {
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
      }
      this.state.cards.forEach(card => {
        card.count = 0;
      });
      alert(`Game Over :( \nscore: ${this.state.score}`);
      this.setState({score: 0});
      return true;
    }

    clickCount = id => {
      this.state.cards.find((o, i) => {
        if (o.id === id) {
          if (cards[i].count === 0) {
            cards[i].count = cards[i].count + 1;
            this.setState({score: this.state.score + 1}, function(){
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
          } else {
            this.gameOver();
          }
        }
      });
    }

  render() {
    return (
      <Wrapper>
        <img className="guesswho" src="https://hallrecord.org/wp-content/uploads/2018/03/header_logo.png"></img>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
}
}

export default App;
