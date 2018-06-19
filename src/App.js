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
    let tempImagesArr = this.state.images;
    const imageClicked = tempImagesArr[tempImagesArr.findIndex(image => id === image.id)];
    let tempCurrentScore = this.state.currentScore;
    let tempHighestScore = this.state.highestScore;
    let tempStatusGuess = this.state.statusGuess;
    //if the image has been clicked already reset current score and reset image clicked on all images
    if(imageClicked.clicked) {
      tempCurrentScore = 0;
      tempStatusGuess = "You guessed incorrectly :(";
      tempImagesArr.forEach(image => {
        image.clicked = false;
      })
    } else {
      tempStatusGuess = "You guessed correctly :)";
      tempCurrentScore++;
      if(tempCurrentScore > tempHighestScore) {
        tempHighestScore = tempCurrentScore;
      }
      tempImagesArr.forEach(image => {
        if(id === image.id) {
          image.clicked = true;
        }
      })
    }
    //Shuffle the images.
    let m = tempImagesArr.length;
    while(m) {
      let i = Math.floor(Math.random() * m--);
      let t = tempImagesArr[m];
      tempImagesArr[m] = tempImagesArr[i];
      tempImagesArr[i] = t;
    }
    this.setState({
      currentScore: tempCurrentScore,
      highestScore: tempHighestScore,
      images: tempImagesArr,
      statusGuess: tempStatusGuess
    })
    console.log(this.state)
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
