import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  const [lightMode, setLightMode] = useState(false)
  
  
  const DarkMode = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: grey[500],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);
  
  const dictionaryAPI = async() => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(response.data)
    } catch(err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    dictionaryAPI()
  }, [word, category])
  
  return (
    <div className="App" 
    style={{ height: "100vh",
  backgroundColor:lightMode ? "white" : "#282c34",
  color:lightMode ? "black" : "white", transition: "all 0.5s linear"}}>
      <Container maxWidth="md" style={{display: "flex",flexDirection: "column", height: "100vh", 
      jusifyContent: 'space-evenly'}}>
      <div 
        style={{position: "absolute", 
        top: 0, right: 15, paddingTop: 10}}>
        <span>{lightMode ? "Dark" : "Light" } Mode</span>
        <DarkMode checked={lightMode} onChange={() => setLightMode(!lightMode)} />
      </div>
        <Header 
          category={category} 
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode} />
        { meanings && (
          <Definitions 
          word={word} 
          meanings={meanings} 
          category={category} 
          lightMode={lightMode}
          />)
        }
      </Container>
    </div>
  );
}

export default App;
