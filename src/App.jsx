import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dialoge from './Dilog/dialoge';
import SpinningMigu from './spinningMigu';
import Links from './links/Links';
import PageNotFound from './pageNotFound';

function App() {
  return(
    <>
      <SpinningMigu/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dialoge/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
