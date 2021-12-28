import React from 'react'
import Name from "./name"

const  Content = ({contents}) => {
    return (
        <div>
            {contents.map(content => 
            <Name key={content.name} name={content.name} number={content.number}/>
      )}</div>
    )
}

export default Content