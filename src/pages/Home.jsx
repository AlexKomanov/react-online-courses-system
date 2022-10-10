import React from 'react'
import CourseSummary from '../components/CourseSummary'


const Home = ({ courses }) => {

  return (
    <div className='home page'>
      <header>
        <h1>Online Courses</h1>
      </header>
      {courses.map((course) => (
        <CourseSummary course={course} key={`${course.id}`} />
      ))}
    </div>
  )
}

export default Home