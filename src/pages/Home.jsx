import React from 'react'
import CourseSummary from '../components/CourseSummary'
import courses from './courses'
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className='home page'>
        <header>
            <h1>Online Courses</h1>
            {/* <Typography align='center' component="h1" fontFamily="serif" fontSize="55" fontWeight="700">
              Online Courses
            </Typography> */}
        </header>
        {courses.map((course) => (
            <CourseSummary course={course} key={course.id}/>
        ))}
    </div>
  )
}

export default Home