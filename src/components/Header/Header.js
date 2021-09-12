import React from 'react'
import './Header.css'
import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import categories from '../../data/category'

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
  palette: {
    primary: {
      main: lightMode ? "#000" : "#fff",
    },
    type: lightMode ? 'light' : 'dark',
  },
  });
  
  const handleChange = (language) => {
    setCategory(language)
    setWord("")
  }
  
  return (
    <div className="header">
      <span className="title">{word ? word : 'Word Hunt'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField 
          className="search" 
          label="Search a word"
          value={word}
          onChange={(e) => setWord(e.target.value)} />
          <TextField
          className="select"
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map((option) => {
              return <MenuItem 
                key={option.label} 
                value={option.label}>
             {option.value}
            </MenuItem>
            })}
        </TextField>
        </ThemeProvider>   
      </div>
    </div>
  )
}

export default Header
