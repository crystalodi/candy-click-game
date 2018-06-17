import React, { Component } from 'react';
import images from "./images.json";
import Image from "./components/Image";
import Container from "./components/Container";
import Row from "./components/Row";

class App extends Component {
  state = {
    currentScore: 0,
    highestScore: 0,
    images,
    statusGuess: ""
  }
  imageOnClick = (id) => {
    //Find image in this.state.images
    const imageArray = this.state.images;
    let stateCurrentScore = this.state.currentScore;
    let stateHighestScore = this.state.highestScore;
    const image = imageArray.find(image => image.id === id);
    if(!image.clicked) {
      //Set clicked attribute to true
      image.clicked = true;
      for(let i = 0; i < imageArray.length; i++) {
        if(imageArray[i].id === id) {
          imageArray[i] = image;
        }
      }
      stateCurrentScore = stateCurrentScore + 1;
      if(stateCurrentScore > stateHighestScore) {
        stateHighestScore = stateCurrentScore;
      }
    } else {
      stateCurrentScore = 0
      //start the round over and set click attribute to false
      for(let i = 0; i < imageArray.length; i++) {
        if(imageArray[i].id === id) {
          imageArray[i] = image;
        }
        imageArray[i].clicked = false;
      }
    }
    //Shuffle the Array and reset the state.
    const shuffled = this.shuffleImages(imageArray);
    this.setState({
      currentScore: stateCurrentScore,
      highestScore: stateHighestScore,
      images: shuffled
    })
  }
  shuffleImages = (array) => {
    let m = array.length;
    while(m) {
      let i = Math.floor(Math.random() * m--);
      let t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  render() {
    return (
      <Container>
        <Row>
          {this.state.images.map(image => (
            <Image
              url={image.url}
              id={image.id}
              imageOnClick={this.imageOnClick}
              alt={image.imagealt}
              clicked={image.clicked}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
