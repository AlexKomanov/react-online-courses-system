import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import courses from './courses'
import Box from '@mui/material/Box';
const Course = () => {

    const {courseId } = useParams()
    const course = courses.find(course => course.slug === courseId)

  return (
    <Box sx={{ m: 'auto', mt: 3, mb:3, marginLeft: {xs: 3, md: 'inherit'}, marginRight:  {xs: 3, md: 'inherit'}}}>
    <div className='course page'>
        <header>
            <p>
                <Link to={'/'}>Back to Courses</Link>
            </p>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <Link className='button primary icon' to={`/courses/${courseId}/lessons/${course.lessons[0].id}`}>Start Course</Link>
        </header>

        <div>
            {course.lessons.map((lesson) => (
                <LessonSummary courseId={courseId} lesson={lesson} key={lesson.id}/>
            ))}
        </div>
    </div>
    </Box>
  )
}

export default Course