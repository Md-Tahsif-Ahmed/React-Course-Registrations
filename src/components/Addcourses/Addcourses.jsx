import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
 
const Addcourses = ( {addCourses} ) => {
     
    return (
        <div>
             {
                addCourses.map((course, idx)=><Cart key={idx} course={course}></Cart>)
             }
        </div>
    );
};

Addcourses.propTypes = {
    addCourses: PropTypes.any
};

export default Addcourses;