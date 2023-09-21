import PropTypes from 'prop-types';

const Cart = ({course}) => {
    const {course_title} = course;
    return (
        <div>
            <div className="card w-96 bg-base-100 flex flex-col shadow-xl">
                 
                <div className="p-10">
                    <h2 className="card-title pb-2">{course_title}</h2>
                    
                </div>
                     
            </div>
        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.any
};

export default Cart;