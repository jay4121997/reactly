import React from 'react';
import {Route,Routes} from 'react-router-dom';
import ComponentUpload from './pages/ComponentUpload/ComponentUpload';

const Application = () => {
    return <>
    <Routes>
      <Route path="/component-upload" element={<ComponentUpload/>} ></Route>
      </Routes>
    </>;
};

export default Application;
