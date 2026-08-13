import React from 'react'
import Button from '../components/Button'

const Card = ({name, email, btnNum}) => {
  return (
    <div className="card">
      <div className="card_content">
        <h2 className="card_name">{name}</h2>
        <p className="card_email">{email}</p>
        <div>
          <div>
            <Button name={btnNum} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
