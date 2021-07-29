import React, { useState } from 'react'
import './myFarmGuideContent.css'
import { Grid, makeStyles } from '@material-ui/core'

const ReadMore = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 650) : text}
      <br />
      <button
        onClick={() => setIsReadMore(!isReadMore)}
        className="btn btn-danger"
      >
        {' '}
        {isReadMore ? 'Read More..' : ' Show Less'}
      </button>
    </p>
  )
}
export default function MyFarmGuideContent(props) {
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  return (
    <>
      <div>
        <Grid container justify="center">
          <h4>{props.title}</h4>
        </Grid>
        <Grid container justify="space-around" className="seasonOneWrap">
          <Grid lg={5}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/common/tomato.jpg`}
              width="100%"
              alt=""
              style={{ borderRadius: '15px 15px' }}
            />
          </Grid>
          <Grid lg={6}>
            <ReadMore>
              GeeksforGeeks: A Computer Science portal for geeks. It contains
              well written, well thought and well explained computer science,
              programming articles and quizzes. It provides a variety of
              services for you to learn, so thrive and also have fun! Free
              Tutorials, Millions of Articles, Live, Online and Classroom
              Courses ,Frequent Coding Competitions, Webinars by Industry
              Experts, Internship opportunities, and Job Opportunities.
              Knowledge is power! variety of services for you to learn, so
              thrive and also have fun! Free Tutorials, Millions of Articles,
              Live, Online and Classroom Courses ,Frequent Coding Competitions,
              Webinars by Industry Experts, Internship opportunities, and Job
              Opportunities. Knowledge is power!
            </ReadMore>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className="seasonTwoWrap">
          <Grid lg={6}>
            <ReadMore>
              GeeksforGeeks: A Computer Science portal for geeks. It contains
              well written, well thought and well explained computer science,
              programming articles and quizzes. It provides a variety of
              services for you to learn, so thrive and also have fun! Free
              Tutorials, Millions of Articles, Live, Online and Classroom
              Courses ,Frequent Coding Competitions, Webinars by Industry
              Experts, Internship opportunities, and Job Opportunities.
              Knowledge is power! variety of services for you to learn, so
              thrive and also have fun! Free Tutorials, Millions of Articles,
              Live, Online and Classroom Courses ,Frequent Coding Competitions,
              Webinars by Industry Experts, Internship opportunities, and Job
              Opportunities. Knowledge is power!
            </ReadMore>
          </Grid>
          <Grid lg={5}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/common/tomato.jpg`}
              width="100%"
              alt=""
            />
          </Grid>
        </Grid>
        <Grid container justify="space-around" className="seasonthreeWrap">
          <Grid lg={5}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/common/tomato.jpg`}
              width="100%"
              alt=""
            />
          </Grid>
          <Grid lg={6}>
            <ReadMore>
              GeeksforGeeks: A Computer Science portal for geeks. It contains
              well written, well thought and well explained computer science,
              programming articles and quizzes. It provides a variety of
              services for you to learn, so thrive and also have fun! Free
              Tutorials, Millions of Articles, Live, Online and Classroom
              Courses ,Frequent Coding Competitions, Webinars by Industry
              Experts, Internship opportunities, and Job Opportunities.
              Knowledge is power! variety of services for you to learn, so
              thrive and also have fun! Free Tutorials, Millions of Articles,
              Live, Online and Classroom Courses ,Frequent Coding Competitions,
              Webinars by Industry Experts, Internship opportunities, and Job
              Opportunities. Knowledge is power!
            </ReadMore>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
