import React from 'react'
import Xiaomi from "../../../images/xiaomi.png"
import "../Category/category.scss"
import Watch from "../../../images/awatch.png"
import mobile from "../../../images/iphoneaccess.png"
import {Link} from "react-router-dom"

function Category() {
  return (
    <div className='man-access'>
      <div className="mobile">

        <div className="mobile-information">
          <div className="information-text">

            <h3>Telefon</h3>
            <div className="informationlink">
              <Link to="Allcatagory">

                Məhsullara keçid
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9995 19.0001C9.7735 19.0001 9.5465 18.9241 9.3595 18.7681C8.9355 18.4151 8.8785 17.7841 9.2315 17.3601L13.7075 11.9891L9.3925 6.62707C9.0465 6.19707 9.1145 5.56707 9.5445 5.22107C9.9755 4.87507 10.6045 4.94307 10.9515 5.37307L15.7795 11.3731C16.0775 11.7441 16.0735 12.2741 15.7685 12.6401L10.7685 18.6401C10.5705 18.8771 10.2865 19.0001 9.9995 19.0001Z" fill="#3366FF" />
                </svg>
              </Link>

            </div>

          </div>
          <img src={Xiaomi} alt="" />
        </div>
      </div>

      <div className="access">
        <div className='smart-watch'>
          <div className="information-text">

            <h3>Smart Saat</h3>
            <div className="informationlink">
              <Link to="Allwatch">

                Məhsullara keçid
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9995 19.0001C9.7735 19.0001 9.5465 18.9241 9.3595 18.7681C8.9355 18.4151 8.8785 17.7841 9.2315 17.3601L13.7075 11.9891L9.3925 6.62707C9.0465 6.19707 9.1145 5.56707 9.5445 5.22107C9.9755 4.87507 10.6045 4.94307 10.9515 5.37307L15.7795 11.3731C16.0775 11.7441 16.0735 12.2741 15.7685 12.6401L10.7685 18.6401C10.5705 18.8771 10.2865 19.0001 9.9995 19.0001Z" fill="#3366FF" />
                </svg>
              </Link>

            </div>

          </div>

          <img src={Watch} alt="" />
        </div>

        <div className='new-access'>
          <div className="information-text">

            <h3>Aksesuar</h3>
            <div className="informationlink">
              <Link to="Allaccessories">

                Məhsullara keçid
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9995 19.0001C9.7735 19.0001 9.5465 18.9241 9.3595 18.7681C8.9355 18.4151 8.8785 17.7841 9.2315 17.3601L13.7075 11.9891L9.3925 6.62707C9.0465 6.19707 9.1145 5.56707 9.5445 5.22107C9.9755 4.87507 10.6045 4.94307 10.9515 5.37307L15.7795 11.3731C16.0775 11.7441 16.0735 12.2741 15.7685 12.6401L10.7685 18.6401C10.5705 18.8771 10.2865 19.0001 9.9995 19.0001Z" fill="#3366FF" />
                </svg>
              </Link>

            </div>

          </div>
          <img src={mobile} alt="" />

        </div>
      </div>

    </div>
  )
}

export default Category