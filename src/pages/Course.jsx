import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { fetchData } from '../AWSFunctions';

const Course = () => {

  const courses = useLoaderData();
  
  const { courseId } = useParams()
  const course = courses.find(course => course.slug === courseId)

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

        <div>
          {course.lessons.map((lesson) => (
            <LessonSummary courseId={courseId} lesson={lesson} key={lesson.id} course={course} />
          ))}
        </div>
      </div>
    </Box>
  )
}

export default Course

export const courseLoader = async() => {

  const data = await fetchData();
  return data;
}