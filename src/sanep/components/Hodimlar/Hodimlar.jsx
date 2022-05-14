import React, { Component } from 'react';
import './Style/Hodimlar.scss'
import bir from './HodimImg/bir.jpg'
import ikki from './HodimImg/ikki.jpg'
import uch from './HodimImg/uch.jpg'
import tort from './HodimImg/tort.jpg'
import besh from './HodimImg/besh.jpg'
import olti from './HodimImg/olti.jpg'
import yetti from './HodimImg/yetti.jpg'
import sakkiz from './HodimImg/sakkiz.jpg'
import toqqiz from './HodimImg/toqqiz.jpg'
import on from './HodimImg/on.jpg'
import onbir from './HodimImg/onbir.jpg'

class Hodimlar extends Component {
    render() {
        return (
            <div className='hodim-page'>
                <div className="hodim-all-card">
                    <h1 className="hodim-title">Hodimlar</h1>
                    <div className="hodim-card">
                        <div className="hodim-users">
                            <div className="img">
                                <img src={bir} alt="" />
                            </div>
                            <div className="hodim-about">
                                <h1 className="hodim-name">Sherutayeva Gulnora Obidovna</h1>
                                <h3 className="hodim-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati 
                                    Sirdaryo viloyati boshqarmasi Guliston shahar bo`limi boshlig`i
                                </h3>
                                <h4 className="hodim-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="hodim-contact">
                                    <h4 className="hodim-email">
                                        Email:
                                        <a href="mailto:">gulnora.sherutayeva@ssv.uz </a>
                                    </h4>
                                    <h4 className="hodim-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="hodim-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hodimlar;
