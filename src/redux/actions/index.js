import axiosInstance from '../../axios'
import qs from 'qs'
import ActionTypes from '../actions/actionTypes'
//Action creator to fetch products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // let jwttoken=localStorage.getItem('token');
      // let config={
      //     headers:{
      //         'Authorization':`Bearer ${jwttoken}`
      //     }
      // };
      let productsResponse = await axiosInstance.get('/products/all')
      let productsAPIResponse = productsResponse.data
      let products = productsAPIResponse.data
      if (products.length > 0) {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: products })
      } else {
        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: [] })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
//Action creator to fetch categories
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      // let jwttoken=localStorage.getItem('token');
      // let config={
      //     headers:{
      //         'Authorization':`Bearer ${jwttoken}`
      //     }
      // };
      let categoriesResponse = await axiosInstance.get('/categories/all')
      let categoriesAPIResponse = categoriesResponse.data
      let categories = categoriesAPIResponse.data
      if (categories.length > 0) {
        dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: categories })
      } else {
        dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: [] })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
//Action creator to fetch tags
export const fetchTags = () => {
  return async (dispatch) => {
    try {
      // let jwttoken=localStorage.getItem('token');
      // let config={
      //     headers:{
      //         'Authorization':`Bearer ${jwttoken}`
      //     }
      // };
      let tagsResponse = await axiosInstance.get('/tags/all')
      let tagsAPIResponse = tagsResponse.data
      let tags = tagsAPIResponse.data
      if (tags.length > 0) {
        dispatch({ type: ActionTypes.FETCH_TAGS, payload: tags })
      } else {
        dispatch({ type: ActionTypes.FETCH_TAGS, payload: [] })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
//Action creator to fetch category based on Category Id
export const fetchCategory = (categoryId) => {
  return async (dispatch) => {
    try {
      // let jwttoken=localStorage.getItem('token');
      // let config={
      //     headers:{
      //         'Authorization':`Bearer ${jwttoken}`
      //     }
      // };
      let categoryResponse = await axiosInstance.get(
        `/categories/${categoryId}`
      )
      let categoryAPIResponse = categoryResponse.data
      let category = categoryAPIResponse.data
      if (Object.keys(category).length > 0) {
        console.log(category)
        dispatch({ type: ActionTypes.FETCH_SINGLE_CATEGORY, payload: category })
      } else {
        dispatch({ type: ActionTypes.FETCH_SINGLE_CATEGORY, payload: {} })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
export const filterProducts = (categoryId, searchValue, filterTerm) => {
  return async (dispatch) => {
    try {
      let serializedStr
      if (filterTerm !== '') {
        serializedStr = qs.stringify({
          categoryId: categoryId,
          searchValue: searchValue,
          filterTerm: filterTerm,
        })
      } else if (filterTerm === '') {
        if (categoryId !== '') {
          serializedStr = qs.stringify({
            categoryId: categoryId,
            searchValue: searchValue,
          })
        } else if (categoryId === '') {
          serializedStr = qs.stringify({
            searchValue: searchValue,
          })
        }
      }
      let response = await axiosInstance.post('/products/filter', serializedStr)
      let APIResponse = response.data
      let products = APIResponse.data
      if (products.length > 0) {
        dispatch({ type: ActionTypes.PRODUCTS_FILTER, payload: products })
      } else {
        dispatch({ type: ActionTypes.PRODUCTS_FILTER, payload: [] })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
export const fetchProductionData = () => {
  return async (dispatch) => {
    try {
      let response = await axiosInstance.get(
        '/product/profile/fetch/production'
      )
      let APIResponse = response.data
      let productionData = APIResponse.data
      console.log(productionData)
    } catch (e) {
      console.log(e)
    }
  }
}
export const fetchBIProductsData = () => {
  return async (dispatch) => {
    try {
      let response = await axiosInstance.get(
        '/product/profile/fetch/biproducts'
      )
      let APIResponse = response.data
      let biproductsData = APIResponse.data
      console.log(biproductsData)
    } catch (e) {
      console.log(e)
    }
  }
}
