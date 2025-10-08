export async function decryptFile(
	encryptedBuffer: ArrayBuffer, // The full encrypted file data (salt + iv + tag + ciphertext)
	password: string, // The password the user provides
): Promise<Blob> {
	// --- 1. Slice the encrypted data into components ---
	const salt = encryptedBuffer.slice(0, 16); // First 16 bytes: the salt used in PBKDF2
	const iv = encryptedBuffer.slice(16, 32); // Next 16 bytes: initialization vector for AES-GCM
	const tag = encryptedBuffer.slice(32, 48); // Next 16 bytes: authentication tag from AES-GCM
	const ciphertext = encryptedBuffer.slice(48); // Remaining bytes: the actual encrypted file content

	// --- 2. Import the password as a "raw key" for PBKDF2 ---
	const keyMaterial = await crypto.subtle.importKey(
		"raw", // Input is a raw byte array
		new TextEncoder().encode(password), // Convert the password string into bytes
		{ name: "PBKDF2" }, // Specify the algorithm we're going to derive a key with
		false, // Key is not extractable
		["deriveKey"], // Purpose: we want to derive a key from it
	);

	// --- 3. Derive the AES-GCM key from password + salt ---
	const key = await crypto.subtle.deriveKey(
		{
			name: "PBKDF2", // Algorithm used
			salt, // Must match the salt used during encryption
			iterations: 100_000, // Number of PBKDF2 iterations (same as encryption)
			hash: "SHA-256", // Hash function for PBKDF2
		},
		keyMaterial, // The password material we just imported
		{ name: "AES-GCM", length: 256 }, // Target key type: 256-bit AES-GCM
		false, // Key is not extractable
		["decrypt"], // Purpose: decryption
	);

	// --- 4. Combine ciphertext + tag ---
	// Web Crypto expects the AES-GCM tag to be appended to the ciphertext
	const ciphertextWithTag = new Uint8Array(
		ciphertext.byteLength + tag.byteLength, // Allocate array big enough for both
	);
	ciphertextWithTag.set(new Uint8Array(ciphertext)); // Copy ciphertext first
	ciphertextWithTag.set(new Uint8Array(tag), ciphertext.byteLength); // Append tag

	// --- 5. Decrypt using AES-GCM ---
	const decrypted = await crypto.subtle.decrypt(
		{ name: "AES-GCM", iv }, // AES-GCM params; IV must match encryption
		key, // The derived AES-GCM key
		ciphertextWithTag, // The combined ciphertext + tag
	);

	// --- 6. Return as a Blob so it can be downloaded in the browser ---
	return new Blob([decrypted]);
}
