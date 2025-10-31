import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import FilesPage from "./pages/FilesPage";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white shadow p-4 flex justify-center space-x-6">
        <Link to="/" className="text-blue-600 font-medium">Upload</Link>
        <Link to="/files" className="text-blue-600 font-medium">Files</Link>
        <Link to="/download" className="text-blue-600 font-medium">Download</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
