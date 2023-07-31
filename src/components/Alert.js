import React from 'react'

export default function Alert(props) {
    const changetocaps = (message) => {
        return message.toUpperCase();
    }
  return (
    props.alert && <>
    <div className="container my-2">
        <div className={`alert alert-${props.alert.type}`} role="alert">
            {changetocaps(props.alert.message)}
        </div>
    </div>
    </>
  )
}
