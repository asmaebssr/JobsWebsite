import {
      Route, 
      createBrowserRouter, 
      createRoutesFromElements, 
      RouterProvider
    } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobesPage from './pages/JobesPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path='/jobs' element={<JobesPage />}></Route>
      <Route path='/add-job' element={<AddJobPage />}></Route>
      <Route path='/jobs/:id' element={<JobPage />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;