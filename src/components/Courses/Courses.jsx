import PropTypes from 'prop-types';
import Course from '../Course/Course';
import { useEffect, useState } from 'react';


const Courses =({handleAddCourse}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
      fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
    },[]);
    return (
        <div className='grid grid-cols-3 gap-6'>
             {
                courses.map((course_data, idx) => <Course key={idx} course_data={course_data} handleAddCourse={handleAddCourse}></Course>)
             }
        </div>
    );
};

Courses.propTypes = {
    // courses: PropTypes.any
    handleAddCourse: PropTypes.func
    
};

export default Courses;