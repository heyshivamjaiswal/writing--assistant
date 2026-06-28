import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardPage from './app/dashboard/DashboardPage';
import Editor from './app/dashboard/editor/Editor';
import History from './app/dashboard/history/History';
import Landing from './pages/Landing';
import AuthenticationPage from './app/auth/authPage/AuthenticationPage';
import BootstrapDocuments from './components/shared/BootstrapDocuments';
import ProtectRoute from './components/shared/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <BootstrapDocuments />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <DashboardPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/dashboard/editor"
          element={
            <ProtectRoute>
              <Editor />
            </ProtectRoute>
          }
        />
        <Route
          path="/dashboard/history"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
