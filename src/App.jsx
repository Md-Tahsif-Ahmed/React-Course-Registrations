import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Addcourses from './components/Addcourses/Addcourses';
import { useState } from 'react';
// import toast moduule
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [addCourses, setAddCources] = useState([]);
  const [addCredit, setAddCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAddCourse = (course_data) => {
    if (!addCourses.some((course) => course === course_data)) {
      const newAddCourse = [...addCourses, course_data];
      const newCredit = addCredit + course_data.credit_hours;
      const newTotalPrice = totalPrice + course_data.price;
      if (newCredit <= 20) {
        setAddCources(newAddCourse);
        setAddCredit(newCredit);
        setTotalPrice(newTotalPrice);
        // Credit Remaining calculation
        const newCreditRemaining = 20 - newCredit;
        if(newCreditRemaining < 0){
          toast.warn('Credit Remaining will not be less than 0 !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }         
        else{
          setCreditRemaining(newCreditRemaining);
            }
          }
      else{
        toast.warn('Credit can not exceed 20 !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }

    }
    else{
      toast.warn('You can not add same course one more !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };
  return (
    <div className='bg-slate-50'>
      <Header></Header>
      <div className="space-y-6 md:space-y-0 mx-12 md:flex md:flex-row-reverse md:mx-10 lg:flex md:gap-6 lg:mx-20 mt-11 pb-8">
        <Addcourses addCourses={addCourses} addCredit={addCredit} creditRemaining={creditRemaining} totalPrice={totalPrice}></Addcourses>
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
