import React from 'react'
import PropTypes from 'prop-types'

const FirstApp = ({title, subTitle}) => {
  console.log(title, typeof title); // Verifica el tipo de `title` en la consola
  return (
    <>
    <h1>{title} {1+5}</h1>
    <p>{subTitle}</p>      
    </>
  )
}

FirstApp.propTypes  = {
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string
}

export default FirstApp
