import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Course, courseLoader} from "./pages/Course";
import { coursesLoader, Home } from "./pages/Home";
import { Lesson, lessonLoader } from "./pages/Lesson";
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import * as AWS from 'aws-sdk'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} loader={coursesLoader} />
    <Route path="/courses/:courseId" element={<Course />} loader={courseLoader}/>
    <Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson />} loader={lessonLoader}/></>
))
const App = () => {
  //   const docClient = new AWS.DynamoDB.DocumentClient()
  //   const fetchData = (tableName) => {
  //     let params = {
  //         TableName: tableName
  //     }

  //     docClient.scan(params, (err, data) => {
  //             setCourses(data.Items)

  //     })
  //     setLoading(false);
  // }

  // const [courses, setCourses] = useState(['']);
  // // const [loading, setLoading] = useState(true)

  // // TODO - Check removing firestore query
  // const coursesCollection = collection(db, 'Courses')
  // const getCourses = async () => {
  //   const data = await getDocs(coursesCollection);
  //   setCourses(data.docs.map((doc) => ({ ...doc.data() })));
  //   // setLoading(false);

  // };

  // useEffect(() => {

  //   // fetchData('courses');
  //   // TODO - Check removing firestore query
  //   getCourses();
  // }, [])

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         height: '100vh',
  //       }}
  //     >
  //       Loading the data
  //     </div>
  //   )
  // }


  return (
    <div className="App">
      <main>

        <Header />
        <RouterProvider router={router}/>

      </main>
    </div>
  );
}

export default App;
