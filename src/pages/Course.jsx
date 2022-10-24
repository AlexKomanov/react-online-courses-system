import React, { Suspense } from 'react'
import { Await, defer, Link, useLoaderData, useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { getCollection } from '../FirebaseFunctions';

const Course = () => {

  const { course, courseId, lessons } = useLoaderData()
  // const course = courses.find(course => course.slug === courseId)

  return (
    <Box sx={{ m: 'auto', mt: 3, mb: 3, marginLeft: { xs: 3, md: 'inherit' }, marginRight: { xs: 3, md: 'inherit' } }}>
      <div className='course page'>
        <header>
          <p>
            {/* <Link to={'/'}>Back to Courses</Link> */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link to={"/"}>
                <Typography>home</Typography>
              </Link >

              <Typography>{course.slug}</Typography>


            </Breadcrumbs>
          </p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <Link className='button primary icon' to={`/courses/${courseId}/lessons/${course.lessons[0].id}`}>Start Course</Link>
        </header>

        <Suspense fallback={<h2>Loading Course Content</h2>}>
          <Await resolve={lessons}>
            {
              (resolvedLessons) => (
                <div>
                  {resolvedLessons.map((lesson) => (
                    <LessonSummary courseId={courseId} lesson={lesson} key={lesson.id} course={course} />
                  ))}
                </div>
              )
            }
          </Await>
        </Suspense>

      </div>
    </Box>
  )
}

const courseLoader = async ({ params }) => {

  const courseId = params.courseId;
  const courses = await getCollection()
  const course = courses.find(course => course.slug === courseId)
  const lessons = course.lessons;

  return defer({
    course, courseId, lessons
  })
}

export { Course, courseLoader }