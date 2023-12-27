import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import Login from "./login";
import { allRoutes } from './routes/routes';
import { LoadingSpinnerComponent } from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '95%',
    margin: '0 auto', // Center the container horizontally (optional)
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container} >
      {/* <Router> */}
        <Router basename='/iskcon/'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<ProtectedRoute><Home /></ProtectedRoute>}>
            {allRoutes.map(item => {

              return (
                <Route key={item.path} path={item.path} element={<ProtectedRoute><item.component /> </ProtectedRoute>} />
              )
            })}
          </Route>
          <Route path="/login" element={<login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <LoadingSpinnerComponent />
      </Router>
    </div>
  );
}

export default App;
