import PropTypes from 'prop-types';

const Cart = ({course, serialNumber}) => {
    const {course_title, price} = course;
    return (
        <div>
            <h3 className="text-gray-500">{`${serialNumber}. ${course_title}`}</h3>
             
        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.any,
    serialNumber: PropTypes.number.isRequired,
};

export default Cart;