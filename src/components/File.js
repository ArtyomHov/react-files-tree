import React from 'react'

export default function File(props) {
    const {name} = props
    const ext = name.split('.')[1]
    const fileIcons = {
        mp3: 'headphones',
        wav: 'headphones',
        png: 'file image',
        jpeg: 'file image outline',
    }
    return (
        <div>
            <i className={`${fileIcons[ext]} icon`}></i>
            {name}
        </div>
    )
}
