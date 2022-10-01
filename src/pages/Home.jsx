import React, { useEffect, useState } from 'react'
import CourseSummary from '../components/CourseSummary'
// import courses from './courses'
import Typography from '@mui/material/Typography';
// import { db } from '../firebase-config';
// import { collection, getDocs} from 'firebase/firestore';

const Home = ({courses}) => {
  // const [courses, setCourses] = useState([]);
  // const coursesCollection = collection(db, 'Courses')

  // useEffect(() => {
  //   const getCourses = async () => {
  //     const data = await getDocs(coursesCollection);
  //     setCourses(data.docs.map((doc) => ({...doc.data()})));
      
  //   };
  
  //   getCourses();
  // }, [])
  
  return (
    <div className='home page'>
        <header>
            <h1>Online Courses</h1>
        </header>
        {courses.map((course) => (
            <CourseSummary course={course} key={course.id}/>
        ))}
    </div>
  )
}

export default Home