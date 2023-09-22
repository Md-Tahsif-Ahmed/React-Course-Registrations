import PropTypes from 'prop-types';

const Addcredit = ({course, }) => {
    const {credit_hours} = course;
     
    return (
        <div>
            <h2>Credit: {total}</h2>
        </div>
    );
};

Addcredit.propTypes = {
    course: PropTypes.any
};

export default Addcredit;