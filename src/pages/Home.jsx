import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import CourseSummary from '../components/CourseSummary'
import { getCollection } from '../FirebaseFunctions';


const Home = () => {

  const { courses } = useLoaderData();


  return (
    <div className='home page'>
      <header>
        <h1>Online Courses</h1>
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={courses}>
          {
            (fetchedCourses) => (
            <>
              {fetchedCourses.map((course) => (
                <CourseSummary course={course} key={`${course.id}`} />
              ))}
            </>
            )
          }
        </Await>
      </Suspense>

    </div>
  )
}


const coursesLoader = async ({ }) => {

  return defer({
    courses: getCollection()
  })
}

export { Home, coursesLoader }