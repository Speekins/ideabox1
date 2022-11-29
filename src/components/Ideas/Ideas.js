import React from 'react'
import './Ideas.css'
import Card from '../Card/Card'

function Ideas({ideas}) {
  let allIdeas = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {!allIdeas.length && <h2>There's nothing to see here!</h2>}
      {allIdeas}
    </div>
  )
}

export default Ideas