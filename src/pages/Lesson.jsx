import React from 'react'
import ReactPlayer from 'react-player'
import { Link, useLoaderData} from 'react-router-dom'
import CompleteAndContinueButton from '../components/CompleteAndContinueButton'
import { ImGoogleDrive } from 'react-icons/im'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'


const Lesson = () => {

  const { courses, courseId, lessonId } = useLoaderData()

  const course = courses.find(course => course.slug === courseId);
  const lesson = course.lessons.find(lesson => lesson.id === parseFloat(lessonId));


  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson)
    const nextIndex = (currentIndex + 1) % course.lessons.length
    return course.lessons[nextIndex].id
  }

  return (
    <Box sx={{ m: 'auto', mt: 3, mb: 3, marginLeft: { xs: 3, md: 'inherit' }, marginRight: { xs: 3, md: 'inherit' } }}>
      <div className='lesson page'>
        <header>
          <p>
            {/* <Link to={'/courses/' + course.id}>Back to '{course.title}'</Link> */}
            {/* <Link to={'/courses/' + course.slug}>Back to course menu</Link> */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link to={"/"}>
              <Typography>home</Typography>
              </Link >
              <Link to={'/courses/' + course.slug}>
              <Typography>{course.slug}</Typography>
              </Link>
              <Typography>lesson {lesson.id}</Typography>
            </Breadcrumbs>
          </p>
          <h1>{lesson.id}. {lesson.title}</h1>
        </header>

        <div className="content">
          <ReactPlayer url={lesson.youtubeLink} controls={true} style={{ maxWidth: '98%', margin: 'auto' }} />
          <CompleteAndContinueButton courseId={courseId} lessonId={nextLessonId()} />
        </div>

        <div>
          <a href={`${lesson.presentation}`} target='_blank'>
            <button className='button presentation'>Link to presentation <ImGoogleDrive /></button>
          </a>
        </div>
      </div>
    </Box>
  )
}

const lessonLoader = async ({ params }) => {
  const courseId = params.courseId;
  const lessonId = params.lessonId;

  const coursesCollection = collection(db, 'Courses')

  const data = await getDocs(coursesCollection);

  const courses = data.docs.map((doc) => ({ ...doc.data() }));
  
  return {courses, courseId, lessonId}
}

export { Lesson, lessonLoader };