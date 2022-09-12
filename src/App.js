import { Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";


function App() {
  return (
    <div className="App">
<main>
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
