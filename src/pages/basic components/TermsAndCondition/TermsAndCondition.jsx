import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>This is our Terms and Condintion</h2>
            <p>Go back to: <Link to='/register'>Register</Link></p>

        </div>
    );
};

export default TermsAndCondition;