import React from 'react'

const Input = (props) => { // { type: '', id: '', name: '', placeholder: '', className: '', nickname: '' }
    return (
        <input
            type={props.type}
            id={props.id}
            className={props.className}
        />
    )
}

export default Input