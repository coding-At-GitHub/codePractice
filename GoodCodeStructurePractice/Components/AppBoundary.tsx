import { Alert } from "@mui/material";
import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
    children: ReactNode;
  }
  
  interface State {
    hasError: boolean;
  }


class AppErrorBoundary extends Component<Props, State>{

    state = {
        hasError: false
    }

    componentDidCatch(error: Error, info: ErrorInfo){

        if(error){
            this.setState({
                hasError: true
            }, () => {

                console.log("AppErrorBoundary error: ", error)
                console.log("AppErrorBoundary info: ", info)
            });
        }
    }

    render(){

        if(this.state.hasError){
            return <Alert severity="error">Technical Error. Please refresh</Alert>
        }
        else{
            return this.props.children;
        }
        
    }
}

export default AppErrorBoundary;