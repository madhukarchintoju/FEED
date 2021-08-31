import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './myMarket.css'
import Geocode from 'react-geocode'
import swal from 'sweetalert'
import axiosInstance from '../../axios'
import qs from 'qs'
import { Link } from 'react-router-dom'
import useDebounce from '../../hooks/debounce'
import { fetchCategories } from '../../redux/actions'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [latlngObj, setlatlngObj] = useState({})
  const [addressComponents, setAddressComponents] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  //Fetch categories
  const dispatch = useDispatch()
  const categoriesObj = useSelector((state) => state.categories)
  //console.log('Redux Categories (Header)',categoriesObj);
  const categories = categoriesObj.categories
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  // const [address,setAddressObj]=useState({});
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchValue !== '') {
          // console.log(searchValue);
          let serializedStr
          let category = document.querySelector('.category-list').value
          if (category !== '') {
            serializedStr = qs.stringify({
              searchValue: searchValue,
              categoryId: category,
            })
          } else {
            serializedStr = qs.stringify({
              searchValue: searchValue,
            })
          }
          let response = await axiosInstance.post(
            '/products/filter',
            serializedStr
          )
          //console.log(response);
          let APIResponse = response.data
          if (APIResponse.status === 1) {
            setSearchResults(APIResponse.data)
          } else if (APIResponse.status === 0) {
            setSearchResults(['No results matched your search'])
          }
        } else {
          setSearchResults(['empty'])
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchSearchResults()
  }, [searchValue])
  //Fetch Geo Coordinates
  useEffect(() => {
    const fetchGeoCoords = async () => {
      try {
        if (window.navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              let lat = pos.coords.latitude
              let lng = pos.coords.longitude
              let ltgObj = {
                latitude: lat,
                longitude: lng,
              }
              setlatlngObj(ltgObj)
            },
            (error) => {
              // throw {message:error};
              console.log(error)
            },
            {
              maximumAge: 10000,
              timeout: 5000,
              enableHighAccuracy: true,
            }
          )
        } else {
          swal('Alert!', "Your browser doesn't support GPS", 'warning')
        }
      } catch (e) {
        swal('Alert!', `${e.message}`, 'warning')
      }
    }
    fetchGeoCoords()
  }, [])
  //Reverse Geocoding
  useEffect(() => {
    const reverseGeocoding = async () => {
      try {
        Geocode.setApiKey('')
        Geocode.setLanguage('en')
        Geocode.setLocationType('ROOFTOP')
        // Get address from latitude & longitude.
        const response = await Geocode.fromLatLng(
          `${latlngObj.latitude}`,
          `${latlngObj.longitude}`
        )
        // const address = response.results[0].formatted_address;
        // setAddressObj(response.results[0]);
        const addressParts = response.results[0].address_components
        //console.log(addressParts);
        setAddressComponents(addressParts)
      } catch (e) {
        swal('Alert!', `${e.message}`, 'warning')
      }
    }
    if (
      Object.keys(latlngObj).length > 0 &&
      latlngObj.hasOwnProperty('latitude') &&
      latlngObj.hasOwnProperty('longitude')
    ) {
      reverseGeocoding()
    }
  }, [latlngObj])
  const debounce = useDebounce()
  //Fetch Matches
  const fetchMatches = async (e) => {
    let searchValue = e.target.value
    debounce(() => {
      setSearchValue(searchValue)
    })
  }
  return (
    <>
      <div className="row bg-primary my-market-row">
        <div className="col-lg-12 bg-success my-market-col">
          <div className="search-header">
            <div className="bullock-img">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-market/bullock-cart.png`}
                alt="bullock-cart"
              />
            </div>
            <h2 className="text-danger">BULLKART</h2>
            <div className="search-box">
              <div className="search-bar">
                <div className="category-dropdown">
                  <select className="category-list">
                    <option value="">All Categories&nbsp;</option>
                    {categories.map((category, i) => {
                      return (
                        <>
                          <option value={`${category.categoryId}`} key={i}>
                            {category.categoryName}
                          </option>
                        </>
                      )
                    })}
                  </select>
                </div>
                <input
                  type="search"
                  name="searchValue"
                  id="search-bar"
                  placeholder="Search products here..."
                  onInput={fetchMatches}
                />
                <div class="search-icon">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              {searchResults.length > 0 &&
              searchResults[0] !== 'empty' &&
              searchResults[0] !== 'No results matched your search' ? (
                <div className="search-results">
                  <ul>
                    {searchResults.map((sresult, i) => {
                      return (
                        <>
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'black',
                            }}
                            to={`/mymarket/product/${sresult.productId}`}
                            key={i}
                          >
                            <li key={i}>{sresult.productName}</li>
                          </Link>
                        </>
                      )
                    })}
                  </ul>
                </div>
              ) : (
                <div className="search-results">
                  {searchResults[0] === 'empty' ? (
                    ''
                  ) : (
                    <ul>
                      <li>{searchResults[0]}</li>
                    </ul>
                  )}
                </div>
              )}
            </div>
            <div className="header-icons">
              <div className="location text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-market/location.png`}
                  alt="location"
                />
                &nbsp;
                {addressComponents.map((comp, i, arr) => {
                  let types = comp.types
                  if (types.indexOf('postal_code') !== -1) {
                    return (
                      <>
                        <span
                          className="your-location"
                          style={{
                            fontWeight: 'bold',
                          }}
                        >
                          {comp.long_name}
                        </span>
                      </>
                    )
                  } else {
                    if (i + 1 === arr.length) {
                      return 'No Signal'
                    } else {
                      return ''
                    }
                  }
                })}
              </div>
              <div className="notifications text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-market/notifications.png`}
                  alt="notifications"
                />
              </div>
              <div className="help text-center">
                <Link to="/contactus">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-market/help.png`}
                    alt="help"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
