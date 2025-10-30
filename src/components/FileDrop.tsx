import React, { useState } from "react";
import { encryptFile, decryptFile } from "../utils/cryptoUtils";

export default function FileDrop() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");

  const handleEncrypt = async () => {
    if (!file || !password) return alert("File and password required");
    const encryptedBlob = await encryptFile(file, password);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(encryptedBlob);
    link.download = file.name + ".secure";
    link.click();
  };

  const handleDecrypt = async () => {
    if (!file || !password) return alert("File and password required");
    try {
      const decrypted = await decryptFile(file, password);
      const blob = new Blob([decrypted]);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = file.name.replace(".secure", "");
      link.click();
    } catch {
      alert("Wrong password or corrupt file!");
    }
  };

  return (
    <div className="p-6 border-2 border-dashed border-gray-400 rounded-lg text-center space-y-4">
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <input
        type="password"
        placeholder="Enter password"
        className="border p-2 rounded w-full"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="flex gap-4 justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEncrypt}>Encrypt 🔒</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleDecrypt}>Decrypt 🔓</button>
      </div>
    </div>
  );
}
