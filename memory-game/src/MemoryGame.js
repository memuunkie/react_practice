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
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'white'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'white'},
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
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    // reset cardState back to HIDING and reshuffle cards
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState: CardState.HIDING,
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }

  handleClick(id) {
    // for updating the props of cards
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);

    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }

    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

    const showingCards = cards.filter((c) => c.cardState === CardState.SHOWING);

    const ids = showingCards.map(c => c.id);

    // check for if cards match or not
    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      
      noClick = true;

      this.setState({cards, noClick}, () => {
        // keep from additional clicking & 
        // set state to HIDING for unmatched cards after 1.5 seconds
        setTimeout(() => {
          this.setState({
            cards: hidingCards, 
            noClick: false
          });
        }, 1500);
      });
      return;
    }

    this.setState({cards, noClick});
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
        <Navbar onNewGame={ this.handleNewGame }/>
        { cards }
      </div>
    );
  }

}
