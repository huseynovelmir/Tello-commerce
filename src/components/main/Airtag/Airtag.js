import React from 'react'
import "../Airtag/airtag.scss"
import iphone13 from "../../../images/iphone13.png"
import { Link } from "react-router-dom"

function Airtag() {
    return (
        <div className="airtag-container">

            <div className="airtag-card-first airtag-card">

                <div className="airtag-text">
                    <h2>AirTag</h2>
                    <h1>Əşyalarınız tapmağın super asan yolu</h1>
                    <p>79 <span>AZN-dən*</span></p>
                    <button>
                        <Link to="Allairtag">

                            İndi al
                        </Link>
                    </button>
                </div>

                <img src={iphone13} alt="" />

            </div>





            <div className="airtag-card-two airtag-card ">

                <div className="airtag-text">
                    <h2>AirTag</h2>
                    <h1>Əşyalarınız tapmağın super asan yolu</h1>
                    <p>79 <span>AZN-dən*</span></p>
                    <button>
                        <Link to="Allairtag">

                            İndi al
                        </Link>
                    </button>
                </div>

                <img src={iphone13} alt="" />
            </div>
        </div>
    )
}

export default Airtag