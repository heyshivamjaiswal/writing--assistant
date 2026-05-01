import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardPage from './app/dashboard/DashboardPage';
import Editor from './app/dashboard/editor/Editor';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}
