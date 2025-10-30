# SecureDrop
Drop. Encrypt. Share. Securely.

SecureDrop is a **modern web-based file encryption tool** designed to let users **encrypt files locally and share them securely**. The recipient can decrypt the file only with the correct password, ensuring **complete privacy and security**.

Drop a file, set a password, and share it confidently — all **encryption happens in the browser**, meaning your data **never leaves your device**.

---

## ⚡ Features

- **Drag & Drop File Upload** – Users can simply drop files into the app to encrypt.
- **AES-256 Encryption** – Strong and secure encryption algorithm ensures file safety.
- **Decrypt Files** – Recipients can decrypt shared files by entering the password.
- **Local Storage Only** – No server is required; files and keys are never uploaded.
- **Web-Only Implementation** – Fully functional with **React, TypeScript, and Web Crypto API**.
- **Cross-Platform Ready** – Can be wrapped with Electron to become a desktop app.
- **Shareable Encrypted Files** – Users can share encrypted files over email, cloud drives, or messaging apps.
- **Progress Feedback** – Shows progress when encrypting/decrypting large files.
- **User-Friendly Interface** – Simple, clean, and responsive design using TailwindCSS.

---

## 🚀 How It Works

1. **Upload / Drop File** – Drag and drop the file you want to encrypt.
2. **Enter Encryption Key** – Type a strong password that only you and the recipient know.
3. **Encrypt** – The file is encrypted locally and ready to share.
4. **Share** – Send the encrypted file to a friend or colleague.
5. **Decrypt** – The recipient enters the key in SecureDrop to unlock the file.

---

## 🎯 Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** TailwindCSS
- **Encryption:** Web Crypto API (AES-256)
- **File Handling:** HTML5 File API
- **Optional Desktop Version:** Electron

---

## 💻 Installation

```bash
# Clone repository
git clone https://github.com/Mbonimana/secure-drop.git

# Navigate to folder
cd secure-drop

# Install dependencies
npm install

# Start the app
npm start

