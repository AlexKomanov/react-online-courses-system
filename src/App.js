import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import { useEffect, useState } from "react";
import * as AWS from 'aws-sdk'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const App = () => {
  const [courses, setCourses] = useState(['']);
  const [loading, setLoading] = useState(true)

  /**
   * Initializing AWS DynamoDB Client
   */
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

  useEffect(() => {

    fetchData('courses');
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }} spacing={2} direction="row">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home courses={courses} />} />
          <Route path="/courses/:courseId" element={<Course courses={courses} />} />
          <Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson courses={courses} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
