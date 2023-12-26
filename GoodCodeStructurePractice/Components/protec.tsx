import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import { OurRoutesRedux } from '../redux/store';

type ProtectedRouteProps = {
    children: any,
}

export default function ProtectedRoute(props: ProtectedRouteProps): JSX.Element{

    const auth = useSelector((state: OurRoutesRedux) => state.auth);
    // console.log(props.children);
    if(auth.isAuthenticated){
        return props.children;
    }
    else{
        return <Navigate to="/" />
    }
}