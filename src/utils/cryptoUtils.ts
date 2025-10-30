// SecureDrop Web Crypto API
export async function encryptFile(file: File, password: string): Promise<Blob> {
  const data = await file.arrayBuffer();
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await window.crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode("secure-drop-salt"), iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );
  // Combine IV + encrypted
  const blob = new Blob([iv, new Uint8Array(encrypted)], { type: "application/octet-stream" });
  return blob;
}

export async function decryptFile(blob: Blob, password: string): Promise<Uint8Array> {
  const data = new Uint8Array(await blob.arrayBuffer());
  const iv = data.slice(0, 12);
  const encryptedData = data.slice(12);
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await window.crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode("secure-drop-salt"), iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
  const decrypted = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encryptedData
  );
  return new Uint8Array(decrypted);
}
