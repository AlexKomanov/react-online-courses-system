import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import courses from './courses'

const Course = () => {

    const {courseId } = useParams()
    const course = courses.find(course => course.slug === courseId)

  return (
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
  )
}

export default Course