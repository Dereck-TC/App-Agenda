import React from 'react'
import '../../assets/css/checkBox.css'

export default function CheckBox(props) {
  return (
    <div>
        <input type='checkbox' id='switch' className='switch' defaultChecked={props.defchecked} onChange={props.press}/>
        <label for='switch'>Toggle</label>
    </div>
  )
}
