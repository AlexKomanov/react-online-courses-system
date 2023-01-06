import * as React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from "react-router-dom";
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home courses={courses} />} />
        <Route path="/courses/:courseId" element={<Course courses={courses} />} />
        <Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson courses={courses} />} />
      </Route>
    )
  )



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
        {console.log('app', courses)}
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App;
