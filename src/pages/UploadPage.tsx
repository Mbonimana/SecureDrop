import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const handleUpload = () => {
    if (!file) {
      setStatus("Please select a file.");
      return;
    }
    setStatus("Encrypting and uploading...");
    // encryption + upload logic will go here
    setTimeout(() => setStatus("✅ File uploaded securely!"), 1500);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
        SecureDrop 🔐
      </h1>
      <label className="block mb-4">
        <span className="text-gray-700">Select file to encrypt:</span>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-2 block w-full border rounded-md p-2"
        />
      </label>
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
      >
        Upload Securely
      </button>

      {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
    </div>
  );
}
