import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import { db } from './firebase-config';
import { collection, getDocs} from 'firebase/firestore';
import { useEffect, useState } from "react";

const App = () => {

  const [courses, setCourses] = useState([]);
  const coursesCollection = collection(db, 'Courses')

  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(coursesCollection);
      setCourses(data.docs.map((doc) => ({...doc.data()})));
      
    };
  
    getCourses();
  }, [courses])


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
