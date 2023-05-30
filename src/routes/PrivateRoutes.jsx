import React,{useContext } from 'react';
import { Navigate, useLocation,} from 'react-router-dom';
import { AuthContext } from '../context/UserContext/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }
    if(!user){
            return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoutes;