import React from 'react'
import "../footer/footer.scss"
import footerlogo from "../../../images/logofooter.svg"
import instagram from "../../../images/instagram.svg"
import facebook from "../../../images/facebook.svg"
import youtube from "../../../images/youtube.svg"
import twitter from "../../../images/twitter.svg"
import location from "../../../images/location.svg"
import mail from "../../../images/mail.svg"
import phone from "../../../images/phone.svg"


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer-logo">
                    <img src={footerlogo} alt="" />
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/webdevbrain/">

                            <img src={instagram} alt="" />
                        </a>
                        <a href="">

                            <img src={facebook} alt="" />
                        </a>
                        <a href="">

                            <img src={youtube} alt="" />
                        </a>
                        <a href="">

                            <img src={twitter} alt="" />
                        </a>
                    </div>

                </div>
                <div className="item-container">


                    <ul className="item">
                        <h3>Menu</h3>

                        <li><a href="">Yeni</a></li>
                        <li><a href="">Endirimlər</a></li>
                        <li><a href="">Aksessuarlar</a></li>
                        <li><a href="">Bütün brendlər</a></li>

                    </ul>
                    <ul className="item">
                        <h3>Kömək</h3>

                        <li> <a href="">Tez-tez soruşulan suallar</a></li>
                        <li><a href="">Çatdırılma xidməti</a></li>
                        <li><a href="">Geri qaytarılma şərtləri</a></li>


                    </ul>
                    <ul className="item">
                        <h3>Əlaqə</h3>


                        <li><a href=""><img src={location} alt="" /> M. K. Ataturk avenue 89, Baku, Azerbaijan</a></li>
                        <li><a href=""><img src={mail} alt="" /> example@gmail.com</a></li>
                        <li><a href=""><img src={phone} alt="" /> *2108</a></li>

                    </ul>
                </div>





            </div>
            <div className="the-end">

                <div className="hr-end"></div>
                
                <div className="end-text">
                    <p>	&copy; Tello 2022. Bütün hüquqlar qorunur.</p>
                    <div className="end-area">
                        <p>Qaydalar və şərtlər</p>
                        <p>Məxfilik siyasəti</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer