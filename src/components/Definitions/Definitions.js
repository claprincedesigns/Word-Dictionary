import React from 'react'
import './Definitions.css'

const Definitions = ({word, category, meanings, lightMode}) => {
  return (
    <div className="meanings">
      {
        meanings[0] && word && category === "en" && (
          <audio 
          src={meanings[0].phonetics[0] && 
            meanings[0].phonetics[0].audio} 
          style={{ backgroundColor: "white", borderRadius: "10px"}} 
          controls>
            Your browser doesn't support audio element
          </audio>
        )
      }
      
        {
          word === "" ? ( 
            <span className="subTitle">Start by typing a word in search</span>
            ) : (
            meanings.map((mean) => {
              return mean.meanings.map((item) => {
                return item.definitions.map((def) => {
                   return <div className="singleMean" 
                   style={{backgroundColor: lightMode ? "#3b5360" : 'white', color: lightMode ? "white" : 'black', paddingLeft: "10px", paddingRight: "10px"}}>
                    <b>{ def.definition }</b>
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                    {
                      def.example && (
                        <span>
                          <b>Example : </b>
                          {def.example}
                        </span>
                      )
                    }
                    {
                      def.synonyms && (
                      <span>
                          <b>Synonyms : </b>
                          {def.synonyms.map((syn) => {
                           return `${syn}, `
                          })}
                        </span>
                    )}
                   </div>
                })
              })
            })
          )
        }
    </div>
  )
}

export default Definitions
