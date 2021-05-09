import React, { useState } from 'react'

export default function Folder(props) {
    const { name, children } = props
    const [ isOpen, setIsOpen ] = useState(true)
    const direction = isOpen ? "caret down icon" : "caret right icon"
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <span onClick={handleClick}>
            <i className="blue folder icon"></i>
            <i className={direction}></i>
            </span>
            {name}
            <div className="file-container">
                {isOpen ? children : null}
            </div>
        </div>
    )
}
