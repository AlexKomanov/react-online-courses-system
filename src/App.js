import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";


const App = () => {
  return (
    <div className="App">
<main>

  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses/:courseId" element={<Course />} />
    <Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson />} />
  </Routes>
</main>
    </div>
  );
}

export default App;
