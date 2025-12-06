import React from 'react';
import toast from 'react-hot-toast';

const Home = () => {
    const handletoast =()=>{
        toast.success('success')
        console.log('object');
    }
    return (
        <div>
            <h3 className='text-3xl'>Home</h3>
            <button className='btn btn-warning text-2xl' onClick={handletoast}>toast</button>
        </div>
    );
};

export default Home;