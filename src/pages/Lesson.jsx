import React from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import CompleteAndContinueButton from '../components/CompleteAndContinueButton'
import courses from './courses'
import {ImGoogleDrive} from 'react-icons/im'


const Lesson = () => {

    const {courseId, lessonId } = useParams()

    const course = courses.find(course => course.slug === courseId);
    const lesson = course.lessons.find(lesson => lesson.id === parseFloat(lessonId));
    

  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson)
    const nextIndex = (currentIndex + 1) % course.lessons.length
    return course.lessons[nextIndex].id
  }

  return (
    <div className='lesson page'>
      <header>
        <p>
        {/* <Link to={'/courses/' + course.id}>Back to '{course.title}'</Link> */}
        <Link to={'/courses/' + course.slug}>Back to course menu</Link>
        </p>
        <h1>{lesson.id}. {lesson.title}</h1>
      </header>
      <div className="content">
        <ReactPlayer url={lesson.youtubeLink} controls={true} />
        <CompleteAndContinueButton courseId={courseId} lessonId={nextLessonId()} />
      </div>

      <div>
      <a href={`${lesson.presentation}`} target='_blank'>  
      <button className='button presentation'>Link to presentation <ImGoogleDrive /></button>
      </a>     
      </div>
    </div>
  )
}

export default Lesson