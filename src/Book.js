import React from 'react'

const Book = ({ image, title, author }) => {
  return (
    <section className='bookSection'>
        <img src={image} alt='book' />
        <h2>{title}</h2>
        <h5>{author}</h5>
    </section>
  )
}

export default Book