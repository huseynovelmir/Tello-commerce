import React from 'react'
import box from "../../../images/box.svg"
import card from "../../../images/card.svg"
import medal from "../../../images/medal.svg"
import "../adventage/adventage.scss"

function Adventage() {
    return (
        <div className='adventage'>
            <div className="talon">
                <img src={box} alt="" />
                <h6>Çatdırılma</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>

            </div>
            <div className="talon">
                <img src={card} alt="" />
                <h6>Kredit</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>

            </div>
            <div className="talon">
                <img src={medal} alt="" />
                <h6>Zəmanət</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>

            </div>
            


        </div>
    )
}

export default Adventage