import React, { useEffect } from 'react'
import './myMarket.css'
import { useSelector, useDispatch } from 'react-redux'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../../redux/actions'

const Categories = () => {
  const categoriesObj = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const categories = categoriesObj.categories
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  const handlePrev = () => {
    let prevElem = document.querySelector('.owl-prev')
    prevElem.click()
  }
  const handleNext = () => {
    let nextElem = document.querySelector('.owl-next')
    nextElem.click()
  }
  return (
    <>
      <div className="slider-box">
        <button
          type="button"
          className="slider-handler left-handler"
          onClick={handlePrev}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-market/prev.svg`}
            alt="prev"
          />
        </button>
        {categories.length && (
          <OwlCarousel
            className="owl-theme category-slider"
            dots={false}
            items={5}
            autoplay={true}
            loop={true}
            nav
          >
            {categories.map((category, index, arr) => {
              // console.log(category.categoryName);
              return (
                <>
                  <div className="item" key={index}>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                      }}
                      to={`/mymarket/products/${category.categoryId}`}
                    >
                      <div className="img-bg">
                        <div className="inner-bg">
                          <img
                            src={`${category.categoryImages[0]}`}
                            alt="vegetables"
                          />
                        </div>
                      </div>
                    </Link>
                    <h6 className="text-center text-uppercase mt-2">
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                        }}
                        to={`/mymarket/products/${category.categoryId}`}
                      >
                        {category.categoryName}
                      </Link>
                    </h6>
                  </div>
                </>
              )
            })}
          </OwlCarousel>
        )}
        <button
          type="button"
          className="slider-handler right-handler"
          onClick={handleNext}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-market/next.svg`}
            alt="prev"
          />
        </button>
      </div>
    </>
  )
}

export default Categories
