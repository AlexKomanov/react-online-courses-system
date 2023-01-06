import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../AWSFunctions'
import CourseSummary from '../components/CourseSummary'


const Home = () => {

  const courses = useLoaderData();
  
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

export const coursesLoader = async() => {
  const data = await fetchData();
  return data;
}