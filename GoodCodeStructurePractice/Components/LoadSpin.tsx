import Backdrop from '@mui/material/Backdrop';
import { usePromiseTracker } from "react-promise-tracker";
import { ScaleLoader } from 'react-spinners';




export const LoadingSpinnerComponent = () => {
    const { promiseInProgress } = usePromiseTracker();


    function backdropClick(evt: any) {
        evt.preventDefault();
    }

    return (
        <div>
            <Backdrop tabIndex={-1} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={promiseInProgress}
                onClick={backdropClick}>

                <ScaleLoader height={50} width={8} radius={4} color="orange" />
            </Backdrop>


        </div>
    )
};