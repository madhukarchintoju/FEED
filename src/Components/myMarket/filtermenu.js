import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './products.css'
import PriceRange from './pricerange'
import DistanceRange from './distancerange'
import { fetchCategories } from '../../redux/actions'
import { Link } from 'react-router-dom'

const FilterMenu = ({ categoryId, setProductsArr }) => {
  const categoriesObj = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const categories = categoriesObj.categories
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <>
      <div className="col-lg-2 mm-side-menu">
        <div className="accordion">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Related Categories</h4>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#accOne"
              >
                <i class="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="collapse" id="accOne">
              <div className="card-body">
                <ul className="related-categories">
                  {categories.length > 0
                    ? categories.map((catg, i) => {
                        return (
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'black',
                            }}
                            to={`/mymarket/products/${catg.categoryId}`}
                          >
                            <li data-categoryid={`${catg.categoryId}`} key={i}>
                              {catg.categoryName}
                            </li>
                          </Link>
                        )
                      })
                    : ''}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Best Offer</h4>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#accTwo"
              >
                <i class="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="collapse" id="accTwo">
              <div className="card-body">
                <p>
                  sjdvsdhjhsabdw
                  ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Price</h4>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#accThree"
              >
                <i class="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="collapse" id="accThree">
              <div className="card-body p-3">
                <PriceRange
                  categoryId={categoryId}
                  setProductsArr={setProductsArr}
                ></PriceRange>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Quantity</h4>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#accFour"
              >
                <i class="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="collapse" id="accFour">
              <div className="card-body">
                <p>
                  sjdvsdhjhsabdw
                  ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Business Type</h4>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#accFive"
              >
                <i class="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="collapse" id="accFive">
              <div className="card-body">
                <p>
                  sjdvsdhjhsabdw
                  ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Delivery Distance</h4>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#accSix"
              >
                <i class="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="collapse" id="accSix">
              <div className="card-body">
                <DistanceRange></DistanceRange>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterMenu
