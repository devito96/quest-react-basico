import React from 'react'


const Button = ({label}) => {
    return <button onClick={() => alert(`A label desse button é ${label}`)}>{label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button