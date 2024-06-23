import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes';




function App() {
  const dispatch = useDispatch()

  useEffect(() => {
  // dispatch(fetchAllQuestions())
  // dispatch(fetchAllUsers())
  
  } ,[dispatch])
  
 return (
<Router>
  <Navbar />
<AllRoutes/>
</Router>
  );
}

export default App;
