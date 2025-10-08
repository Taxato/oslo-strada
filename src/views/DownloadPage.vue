<template>
	<div class="bg-dark grid h-screen place-items-center">
		<form
			@submit.prevent="handleDecrypt"
			class="flex max-w-72 flex-col items-center gap-4">
			<span
				v-if="error"
				class="text-center text-lg font-bold tracking-wider text-red-500 uppercase"
				v-text="error" />
			<input
				v-model="password"
				id="password"
				class="bg-light rounded-md px-4 py-2 text-lg outline-none"
				type="text"
				placeholder="Passord" />
			<button
				class="text-dark size-fit rounded-md bg-white px-4 py-2 text-lg">
				Last ned
			</button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { decryptFile } from "../decryptFile";

const password = ref("");
const error = ref("");

async function handleDecrypt() {
	error.value = "";

	try {
		// Get encrypted file
		const res = await fetch("./EncryptedPdf.enc");
		const encryptedBuffer = await res.arrayBuffer();

		// Decrypt
		const blob = await decryptFile(encryptedBuffer, password.value);

		// Create download link
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "Tittel.pdf";
		a.click();
		URL.revokeObjectURL(url);
	} catch (err) {
		console.error(err);
		error.value = "Incorrect password or file is corrupted";
	}
}
</script>
