import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from './pages/HomePage';

import './index.scss';
import { Navbar } from './components/Navbar';

export const App: FC = (): JSX.Element =>
  <Router>
    <Navbar />
    <Routing />
  </Router>;

const Routing: FC = (): JSX.Element =>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>;