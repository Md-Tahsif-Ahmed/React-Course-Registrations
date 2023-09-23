import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
// import Addcredit from '../Addcredit/Addcredit';
 
const Addcourses = ( {addCourses, addCredit, creditRemaining, totalPrice} ) => {
     
    return (
        <div className=''> 
            <div className="card w-80 bg-base-100 flex flex-col shadow-xl">
                <div className="p-10">
                    <h1 className='font-bold text-blue-500 pb-2'>Credit Remaining {creditRemaining} hour</h1>
                     <div className="py-2"><hr /></div>
                     <h1 className='font-bold text-lg pb-4'>Course Name</h1>
                       <div className="py-2">
                       {
                        addCourses.map((course, idx)=><Cart key={idx} course={course} serialNumber={idx + 1}></Cart>)
                      }   
                       </div>
                    <div className="py-2"><hr /></div>
                    <div className="">
                        <h2 className='font'>Total Credit Hour : {addCredit}</h2>
                    </div>
                    <div className="p-2"><hr /></div>
                    <div className="">
                        <h1 className='font-medium'>Total Price : {totalPrice} USD</h1>
                    </div>
                </div>
                     
            </div>
        </div>
    );
};

Addcourses.propTypes = {
    addCourses: PropTypes.any,
    addCredit: PropTypes.any,
    creditRemaining: PropTypes.any,
    totalPrice: PropTypes.number.isRequired,
};

export default Addcourses;