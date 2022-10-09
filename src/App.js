import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import { db } from './firebase-config';
import { collection, getDocs} from 'firebase/firestore';
import { useEffect, useState } from "react";
import * as AWS from 'aws-sdk'


const App = () => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  const fetchData = (tableName) => {
    let params = {
        TableName: tableName
    }

    docClient.scan(params, (err, data) => {
            setCourses(data.Items)
        
    })
    setLoading(false);
}

  const [courses, setCourses] = useState(['']);
  const [loading, setLoading] = useState(true)
  const coursesCollection = collection(db, 'Courses')

  // TODO - Check removing firestore query
  // const getCourses = async () => {
  //   const data = await getDocs(coursesCollection);
  //   setCourses(data.docs.map((doc) => ({...doc.data()})));
    
  // };

  useEffect(() => {
    
    fetchData('courses');
    // TODO - Check removing firestore query
    // getCourses();
  }, [])

  if(loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        Loading the data
      </div>
    )
  }


  return (
    <div className="App">
<main>

  <Header />
  <Routes>
    <Route path="/" element={<Home courses={courses}/>} />
    <Route path="/courses/:courseId" element={<Course courses={courses} />} />
    <Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson courses={courses}/>} />
  </Routes>
</main>
    </div>
  );
}

export default App;
