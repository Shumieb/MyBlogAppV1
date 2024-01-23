import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from './Pages/LayoutPage';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import NoPage from './Pages/NoPage';
import BlogPage from './Pages/BlogPage';
import BlogsPage from './Pages/BlogsPage';
import AddNewBlogPage from './Pages/AddNewBlogPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogsPage />} >
            <Route path=":blogId" element={<BlogPage />} />
            <Route path="new" element={<AddNewBlogPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


