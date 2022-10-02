import React, { useEffect, useRef, useState, Component } from "react";
import ml5 from "ml5";
import useInterval from '@use-it/interval';
import './App.css';
// Importing ml5.js as ml5

class App extends Component {
  state = {
    predictions: []  // Set the empty array predictions state
  }

  setPredictions = (pred) => {
    // Set the prediction state with the model predictions
    this.setState({
      predictions: pred
    });
   }

  classifyImg = () => {
    // Initialize the Image Classifier method with MobileNet
    const classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/k5sSVW5mC/model.json", modelLoaded);
    // When the model is loaded
    function modelLoaded() {
      console.log('Model Loaded!');
    }
    // Put the image to classify inside a variable
   // const image = document.getElementById('image');
    // Make a prediction with a selected image

    

    classifier.classify(function(err, results) {
      // Return the results
      console.log(results);
      return results;
    })
  }

  componentDidMount(){
    // once the component has mount, start the classification
    this.classifyImg();
  }

  render() {
    return (
      <div className="App">
        <h1>"S" sound classification</h1>
      </div>
    );
  }
}

export default App;