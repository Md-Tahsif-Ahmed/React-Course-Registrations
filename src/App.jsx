import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Addcourses from './components/Addcourses/Addcourses';
import { useState } from 'react';

const App = () => {
  const [addCourses, setAddCources] = useState([]);
  const [addCredit, setAddCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(0);

  const handleAddCourse = (course_data) => {
    if (!addCourses.some((course) => course === course_data)) {
      const newAddCourse = [...addCourses, course_data];
      setAddCources(newAddCourse);
      
      const newCredit = addCredit + course_data.credit_hours;
      if (newCredit <= 20) {
        setAddCredit(newCredit);
        const newCreditRemaining = 100 - addCredit;
        if(newCreditRemaining != 0){
          setCreditRemaining(newCreditRemaining);
         }

      }

     
   
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="flex gap-6">
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <Addcourses addCourses={addCourses} addCredit={addCredit} creditRemaining={creditRemaining}></Addcourses>
      </div>
    </div>
  );
};

export default App;
