import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardPage from './app/dashboard/DashboardPage';
import Editor from './app/dashboard/editor/Editor';
import History from './app/dashboard/history/History';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/editor" element={<Editor />} />
        <Route path="/dashboard/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
