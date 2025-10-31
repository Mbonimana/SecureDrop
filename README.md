# 🔐 SecureDrop — Encrypted File Sharing Platform

SecureDrop is a **privacy-first file sharing and drop-off system** designed to help individuals, journalists, and organizations securely exchange sensitive documents.  
All files are **encrypted before upload**, stored safely, and only accessible through a **unique decryption key**.

---

## 🚀 Features

### 🔒 Security First
- AES-256 encryption on every upload.
- Decryption requires a unique one-time access code.
- Zero-knowledge — the server never sees your decrypted files.

### ⚙️ Core Functionalities
- **Upload & Encrypt** files from your browser.
- **Generate secure download links** with one-time access.
- **Local or cloud storage options** (SQLite, IndexedDB, or Supabase).
- **Audit logs** to track uploads and downloads (optional in v2).

### 🌍 Future Vision
- Offline desktop version (Electron-based).
- Blockchain verification for file authenticity.
- Secure messaging and anonymous report submissions.

---

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Frontend** | React + TypeScript + Tailwind CSS | User Interface |
| **Backend** | Node.js + Express | API & Encryption Handling |
| **Database** | SQLite (local) / IndexedDB | File metadata storage |
| **Encryption** | AES-256 / RSA | File encryption & key management |
| **Desktop Build** | Electron (future) | Offline & cross-platform app |

---


