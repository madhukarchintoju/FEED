import React, { useState, useEffect } from 'react'
import './single-product.css'
import axiosInstance from '../../axios'
// import env from 'react-dotenv';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
const Comments = ({ product }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const getComments = async () => {
      let config = {
        headers: {
          Authorization: `Bearer 804b62082691038f92d4f494ff36211713040ae0588d493801a03293bd49a1b8d56a6ad476ec7c59657ff0b676178489ba4bb8b16d2256213415e56c371261b8`,
        },
      }
      let response = await axiosInstance.get('/sections/SEC80619', config)
      let APIResponse = response.data
      let commentsArr = APIResponse.data.objects
      //console.log(APIResponse);
      if (commentsArr.length > 0) {
        setComments(commentsArr)
      } else {
        setComments([])
      }
    }
    getComments()
  }, [])
  return (
    <>
      <div className="comments-box mb-3">
        <h5 className="text-center">Comments</h5>
        <ul>
          {comments.length > 0
            ? comments.map((comment, index) => {
                let rating = parseInt(comment.metadata.rating)
                let stars = []
                let i
                for (i = 1; i <= rating; i++) {
                  stars.push(i)
                }
                return (
                  <>
                    {comment.objectTag === product ? (
                      <>
                        <li key={index}>
                          <b>
                            <span className="commented-person">
                              {comment.objectTitle}
                            </span>
                          </b>
                          :&nbsp;
                          <span className="comment-text">
                            {comment.objectDescription}
                          </span>
                          <br />
                          <b>Rating</b>:&nbsp;
                          <span className="stars">
                            {stars.length > 0
                              ? stars.map((elem, i, arr) => {
                                  return (
                                    <i
                                      class="fas fa-star"
                                      key={elem}
                                      style={{ color: 'orange' }}
                                    ></i>
                                    // <FontAwesomeIcon icon={faStar} key={elem} style={{
                                    //     'color':'orange'
                                    // }}></FontAwesomeIcon>
                                  )
                                })
                              : ''}
                          </span>
                        </li>
                      </>
                    ) : (
                      ''
                    )}
                  </>
                )
              })
            : ''}
        </ul>
      </div>
    </>
  )
}

export default Comments
