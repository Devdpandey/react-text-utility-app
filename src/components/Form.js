import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Form(props) {
   
    const handleUpClick = () => {
        let updatedValue = text.toUpperCase();
        console.log('updated value is ',updatedValue)
        setText(updatedValue)
        props.alert("Text changed to uppercase",'primary')
        // setText(text)
    }

    const handleLoClick = () => {
        let updatedValue = text.toLowerCase();
        console.log('updated value is ',updatedValue)
        setText(updatedValue)
        props.alert("Text changed to lowercase",'primary')
        // setText(text)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="mb-3" style={{color : props.color === 'dark' ? 'white' : 'black'}}>
        <h1>{props.title}</h1>
        <textarea className="form-control" onChange={handleOnChange} value={text} id="box" rows="5"></textarea>
        <button className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Lowercase</button>
    </div>
    <div className="mb-3" style={{color : props.color === 'dark' ? 'white' : 'black'}}npm>
        <h3>Total words are {text.split(' ').length} and characters are {text.length}</h3>
        <p>Text Preview:</p>
        <pre>{text.length>0 ? text : 'Enter something in the textbox for preview'}</pre>
    </div>
    </>
  )
}

Form.propTypes = {
    title : PropTypes.string,
}
Form.defaultProps = {
    title : 'TEXT AREA',
}