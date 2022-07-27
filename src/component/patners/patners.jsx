import React from 'react'
import Accenture from './../../img/client_logo_01.png'
import Microsoft from './../../img/client_logo_02.png'
import Google from './../../img/client_logo_03.png'
import Onenet from './../../img/client_logo_04.png'
import '../patners/patners.css'
export default function patners() {
  return (
    <div className="patner-main-div">
        <img src={Accenture} alt="" />
        <img src={Microsoft} alt="" />
        <img src={Google} alt="" />
        <img src={Onenet} alt="" />
    </div>
  )
}
