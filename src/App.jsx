import './App.css'
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses'
import Addcourses from './components/Addcourses/Addcourses'
import { useState } from 'react';

const App = () => {
  const [addCourses, setAddCources] = useState([]);

  const handleAddCourse = (course_data)=>{
    const newAddCourse = [...addCourses, course_data];
    setAddCources(newAddCourse);
    console.log(course_data);
  }
  return (
    <div>
      <Header></Header>  
      <Courses handleAddCourse={handleAddCourse}></Courses>
      <Addcourses  addCourses={addCourses}></Addcourses>
    </div>
  );
};

export default App;