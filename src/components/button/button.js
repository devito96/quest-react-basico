import React from 'react'

function tellLabel (label) {
    console.log(`A label desse button é ${label}`)
}

const Button = ({label}) => {
    return <button onClick={() => tellLabel(label)}>{label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button