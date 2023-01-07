import * as React from 'react';
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Course, { courseLoader } from "./pages/Course";
import Home, { allCoursesLoader } from "./pages/Home";
import Lesson, { lessonLoader } from "./pages/Lesson";

const App = () => {

  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route  index element={<Home />} loader={allCoursesLoader} />
        <Route path="/courses/:courseId" element={<Course />} loader={courseLoader}/>
        <Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson />} loader={lessonLoader}/>
      </Route>
    )
  )

      
  /**
   * TODO: Check if needed
   */

  // if (loading) {
  //   return (
  //     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }} spacing={2} direction="row">
  //       <CircularProgress />
  //     </Box>
  //   )
  // }

  return (
    <div className="App">
      <main>
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
