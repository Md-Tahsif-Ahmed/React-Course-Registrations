import PropTypes from 'prop-types';
import { FaDollarSign, } from 'react-icons/fa';

const Course = ({ course_data, handleAddCourse }) => {
    const { image, course_title, description, price, credit_hours } = course_data;
    return (
        <div className="">
            <div className="card w-80 bg-base-100 flex flex-col shadow-xl">
                <figure className="px-10 pt-10">
                    <img className="rounded-xl" src={image} alt={course_title} />
                </figure>
                <div className="p-10">
                    <h2 className="card-title pb-2 text-base font-bold">{course_title}</h2>
                    <p className='text-sm text-gray-500'>{description}</p>
                    <h5 className='text-gray-500 flex items-center pt-2'>
                       <span className='mr-3'><FaDollarSign/>
                       </span><span>Price: {price}</span>
                       <span className='mx-3'><svg xmlns="http://www.w3.org/2000/svg" width="20" 
                       height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                        stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></span>
                        <span>Credit: {credit_hours}</span>
                    </h5>
                    <div className="pt-3">
                        <button  onClick={()=>handleAddCourse(course_data)} className=" btn bg-blue-500 w-full normal-case text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course_data: PropTypes.any,
    handleAddCourse: PropTypes.func
};

export default Course;
