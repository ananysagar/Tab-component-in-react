import React from 'react'
import './App.css'

function TabButton({richestPerson}) {
  return (
    <div className='tab-header'>
        {richestPerson.map((person, index) => {
            return (
                <div key={person.name} className='tab-button'>
                    {person.name}
                </div>
            )
        })}
    </div>
  )
}

export default TabButton

