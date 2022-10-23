import React, { useState, useRef } from 'react'
import './header.scss'
import logo from "../../images/logo.png"
import search from "../../images/search.svg"
import person from "../../images/person.svg"
import heart from "../../images/heart.svg"
import kart from "../../images/kart.svg"
import sidebar from "../../images/sidebar.svg"
import airtag from "../../images/iphone-airtag.png"
import x from "../../images/x.svg"
import arrow from "../../images/arrow.svg"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getAllsearch } from "../../store/Reducer/searchReducer"
import { commerce } from '../../Commerce'
import { useParams } from "react-router-dom"
import useBasket from '../../hooks/useBakset'
import Basketreducer from '../../store/Reducer/Basketreducer'
import useLocalStorage from '../../hooks/useLocalStorage'
import useClick from '../../hooks/useClick'





function Header() {
  const [isShown, setIsShown] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [sidebaropen, setSidebarOpen] = useState(false)
  const [mobileside, setmobileside] = useState(false)
  const [mobilesidesec, setMobilesidesec] = useState(false)
  const [search, setSearch] = useState('')
  const [boolen, setBoolen] = useState(false)
  const [loading, setLoading] = useState(false)
  const show = useRef(null)
  const handleClick = event => { setSidebarOpen(current => !current); };
  const mobilesideclick = event => { setmobileside(current => !current); };
  const mobilesidesecond = event => { setMobilesidesec(current => !current); };
  const [last1, last2, last3, last4, clearLast] = useLocalStorage()
  const [click, searchActive, searchDeactive] = useClick()



  const { productsBas } = useSelector((state) => state.Basket)


  function clear() {
    setSearch("")
  }

  function clearLocal() {
    clearLast()
  }





  const {
    searchProduct,
    searchloading
  } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  // function searchDeactive() {
  //   setBoolen(false)
  // }

  // function serchActive() {
  //   setBoolen(true)
  // }
  window.addEventListener('click', (e) => {
    if (!show.current?.contains(e.target)) {
      searchDeactive()
    }
  })
  // useEffect(() => {

  //   const time = setTimeout(() => {
  //     dispatch(getAllsearch(search))
  //   }, 1000)


  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(getAllsearch(search))
      if (search.trim() !== "") {

        if (localStorage.getItem("Last search1") === null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.setItem("Last search1", search)
        }
        else if (localStorage.getItem("Last search2") === null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.setItem("Last search2", search)
        }
        else if (localStorage.getItem("Last search3") === null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.setItem("Last search3", search)
        }
        else if (localStorage.getItem("Last search4") === null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.setItem("Last search4", search)
        } else if (localStorage.getItem("Last search1") !== null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.removeItem("Last search1")
          localStorage.setItem("Last search1", search)
        }
        else if (localStorage.getItem("Last search2") !== null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.removeItem("Last search2")
          localStorage.setItem("Last search2", search)
        }
        else if (localStorage.getItem("Last search3") !== null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.removeItem("Last search3")
          localStorage.setItem("Last search3", search)
        }
        else if (localStorage.getItem("Last search4") !== null && localStorage.getItem("Last search1") !== search && localStorage.getItem("Last search2") !== search && localStorage.getItem("Last search3") !== search && localStorage.getItem("Last search4") !== search) {
          localStorage.removeItem("Last search4")
          localStorage.setItem("Last search4", search)
        }
      }
    }, 800)

    //   return () => clearTimeout(delayDebounceFn)
    // }, [dispatch, search])

    return () => clearTimeout(time)

  }, [dispatch, search])

  function searchHandler(e) {
    setSearch(e.target.value)

  }

  //! tema gedir






  const navigate = useNavigate()


  return (

    <div className='headermain'>
      <div className='header' >
        <img src={sidebar} alt="" className='sidebar-icon' onClick={handleClick} />

        <Link to="/">
          <img src={logo} alt="" className='logo' />

        </Link>


        <div className="input-div" onClick={searchActive}>
          <img src={search} alt="" />
          <input type="search" placeholder='Axtarış...' onChange={(e) => searchHandler(e)} value={search} ref={show} />
        </div>



        <div className="icon-area">
          <Link to="Login">

            <img src={person} alt="" />
          </Link>
          <img src={heart} alt="" />
          <Link to="Basket">

            <img src={kart} alt="" />
          </Link>
          <div className="counter-circle">{productsBas?.length}</div>
        </div>

      </div>

      <div className="sidebar">



        <div className="mobile-tel"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <Link to="Allcatagory"
          >Mobil Telefonlar</Link>

        </div>
        <div className="accessories"
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}>
          <Link to="Allaccessories"
          >Aksesuarlar</Link>

        </div>

        <Link to="Element">Noutbuklar</Link>
        <Link to="Element">Hobbi Və Əyləncə</Link>
        <Link to="Element">Tv,Audio,Video</Link>


      </div>


      <div className={sidebaropen ? 'mobile-sidebar left-block' : ' mobile-sidebar'}>
        <div className="mobile-sidebar-header">

          <img src={x} alt="" className='cancel-button' onClick={handleClick} />

          <div className="logo-head">
            <a href="/" className='logo'>
              <img src={logo} alt="" />
            </a>
          </div>

        </div>
        <div className="hr-mobile"></div>
        <div className="mobile-accessories">
          <ul>
            <li>
              <Link to="Allcatagory">Mobil Telefonlar</Link>
              <img src={arrow} alt="" onClick={mobilesideclick} className={mobileside ? "rotate" : "rotate-normal"} />


            </li>
            <li className={mobileside ? "accessorie-block click-accessories" : 'click-accessories'} >
              <Link to="Allsamsung">Samsung</Link>
              <Link to="Allapple">Apple</Link>

              <Link to="Allxiomio">Xiaomi</Link>
              <Link to="Allhonor">Honor</Link>

            </li>
            <li>
              <Link to="Allaccessories">Aksesuarlar</Link>
              <img src={arrow} alt="" onClick={mobilesidesecond} className={mobilesidesec ? "rotate" : "rotate-normal"} />

            </li>
            <li className={mobilesidesec ? "mobilesidesec accessorie-block " : "mobilesidesec"}>
              <div className="headphones ">
                <h1><Link to="Qulaqciq">Qulaqcıqlar</Link></h1>
                <ul>
                  <li><Link to="Alljbl">JBL</Link></li>
                  <li><Link to="Allbeats">Beats</Link></li>
                  <li><Link to="Allsony">Sony</Link></li>
                  <li><Link to="Allqcy">Qcy</Link></li>

                </ul>
              </div>
              <div className="watchs">
                <h1><Link to="Allwatch">Saatlar</Link></h1>
                <ul>
                  <li><Link to="Allapplewatch">Apple watch</Link></li>
                  <li><Link to="Allsamsungwatch">Samsung</Link></li>
                </ul>
              </div>

              <div className="braclet">
                <h1><Link to="Allband">Qolbaqlar</Link></h1>
                <ul>
                  <li><Link to="Allband"> Mi Band</Link></li>

                  <li> <Link to="Element">HTC</Link></li>
                </ul>
              </div>
              <img src={airtag} alt="" className='accessorie-img' />

            </li>
            <li><Link to="Element">Noutbuklar</Link></li>
            <li><Link to="Element">Hobbi Və Əyləncə</Link></li>
            <li><Link to="Element">Tv,Audio,Video</Link></li>

          </ul>
        </div>



      </div>
      <div className="hr"></div>


      {isShown && (
        <div className='phone'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>

          <h1>
            <Link to="Allsamsung">Samsung</Link>
          </h1>
          <h1>
            <Link to="Allapple">Apple</Link>
          </h1>
          <h1>
            <Link to="Allxiomio">Xiaomi</Link>
          </h1>
          <h1>
            <Link to="Allhonor">Honor</Link>
          </h1>


        </div>

      )}
      {isShow && (
        <div className="accessorie"
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}  >
          <div className="earphones accessorie-element">
            <h1><Link to="Qulaqciq">Qulaqcıqlar</Link></h1>
            <ul>
              <li><Link to="Alljbl">JBL</Link></li>
              <li><Link to="Allbeats">Beats</Link></li>
              <li><Link to="Allsony">Sony</Link></li>
              <li><Link to="Allqcy">Qcy</Link></li>

            </ul>
          </div>

          <div className="watch  accessorie-element">
            <h1><Link to="Allwatch">Saatlar</Link></h1>
            <ul>
              <li><Link to="Allapplewatch">Apple watch</Link></li>
              <li><Link to="Allsamsungwatch">Samsung</Link></li>
            </ul>
          </div>

          <div className="braclets  accessorie-element">
            <h1><Link to="Allband">Qolbaqlar</Link></h1>
            <ul>
              <li><Link to="Allband"> Mi Band</Link></li>

              <li><Link to="Element">HTC</Link></li>
            </ul>
          </div>
          <img src={airtag} alt="" className='accessorie-img' />
        </div>
      )}
      {
        click ?
          <div className="searching_area">
            <div className="head">
              {search !== "" ? <h4 className="final">Nəticələr</h4> : <h4 className="final">Son axtarışlar</h4>}
              {search !== "" ? <p onClick={clear} className="clear_button">Təmizlə</p> : <p onClick={clearLocal} className="clear_button">Təmizlə</p>}
            </div>
            {search === "" ?
              <>
                {localStorage.getItem("Last search1") ?
                  <div className="last_searchs_area">
                    {localStorage.getItem("Last search1") !== null ? <div onClick={() => setSearch(last1)} className="last_search">
                      <h4 className="last">{last1}</h4>
                    </div> : null}
                    {localStorage.getItem("Last search2") !== null ? <div onClick={() => setSearch(last2)} className="last_search">
                      <h4 className="last">{last2}</h4>
                    </div> : null}
                    {localStorage.getItem("Last search3") !== null ? <div onClick={() => setSearch(last3)} className="last_search">
                      <h4 className="last">{last3}</h4>
                    </div> : null}
                    {localStorage.getItem("Last search4") !== null ? <div onClick={() => setSearch(last4)} className="last_search">
                      <h4 className="last">{last4}</h4>
                    </div> : null}
                  </div> : null
                }
              </>
              :
              <>
                {searchloading ?
                  <>
                    <div className="search-card1-scleton" >
                      <div className="search-img-area-scleton">
                        <img />
                      </div>

                      <div className="search-detail-scleton">
                        <h3></h3>
                        <p ></p>
                      </div>
                    </div>

                    <div className="search-card1-scleton" >
                      <div className="search-img-area-scleton">
                        <img />
                      </div>

                      <div className="search-detail-scleton">
                        <h3></h3>
                        <p ></p>
                      </div>
                    </div>

                    <div className="search-card1-scleton" >
                      <div className="search-img-area-scleton">
                        <img />
                      </div>

                      <div className="search-detail-scleton">
                        <h3></h3>
                        <p ></p>
                      </div>
                    </div>

                  </>
                  : searchProduct?.length > 0 ?
                    searchProduct?.map((item) => (
                      <div onClick={() => {
                        navigate(`/Detail/${item?.id}`)
                        searchDeactive()
                        setSearch("")
                      }} key={item?.id} id={item?.id} className="main_search">
                        <div className="img_product">
                          <img src={item?.image?.url} alt="iPhone" className="product_img" />
                        </div>
                        <div className="product_about">
                          <h1 className="product_name">{item?.name}</h1>
                          <h1 className="product_value">{item?.price?.raw} azn</h1>
                        </div>
                      </div>
                    )) :
                    <div className='neto'>
                      <h1>Məhsul tapılmadı</h1>
                    </div>}
              </>
            }
          </div> :
          null
      }
    </div>
  )

}

export default Header