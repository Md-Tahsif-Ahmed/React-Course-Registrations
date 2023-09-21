import PropTypes from 'prop-types';

const Course = ({ course_data, handleAddCourse }) => {
    const { image, course_title, description, price, credit_hours } = course_data;
    return (
        <div className="">
            <div className="card w-96 bg-base-100 flex flex-col shadow-xl">
                <figure className="px-10 pt-10">
                    <img className="rounded-xl" src={image} alt={course_title} />
                </figure>
                <div className="p-10">
                    <h2 className="card-title pb-2">{course_title}</h2>
                    <p>{description}</p>
                    <h4>
                        <span>Price: {price}</span> <span>Credit: {credit_hours}</span>
                    </h4>
                    <div className="">
                        <button  onClick={()=>handleAddCourse(course_data)} className="btn btn-primary w-full">Select</button>
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
