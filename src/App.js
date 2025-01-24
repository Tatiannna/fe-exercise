import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: < Login />
  },

  {
    path: '/search',
    element: < Home/>
  },

  {
    path: "/*",
    element: < Navigate to='/'/>
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
