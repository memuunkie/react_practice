import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MemoryGame.css';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';

const CardState = {
  HIDING: 0, // not shown
  SHOWING: 1, // shown but no match
  MATCHING: 2, // shown with a match
  // card should never move from MATCHING to another state
}

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'blue'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'blue'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'black'},
    ];
    cards = shuffle(cards);
    this.state = {cards, noClick: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(prevState => {
      let cards = prevState.cards.map( c => (
          c.id === id ? {
            ...c,
            cardState: c.cardState === CardState.HIDING ? CardState.MATCHING : CardState.HIDING
          } : c
      ));
      return {cards};
    });
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Card 
        key={card.id} 
        showing={ card.cardState !== CardState.HIDING } 
        backgroundColor={ card.backgroundColor } 
        onClick={ () => this.handleClick(card.id) } />
    ));

    return (
      <div>
        <Navbar />
        { cards }
      </div>
    );
  }

}
