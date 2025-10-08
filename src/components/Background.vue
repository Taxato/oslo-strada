<template>
	<img
		:src="imageSrc"
		alt="Background"
		class="fixed top-0 left-0 -z-10 min-h-screen min-w-screen object-cover" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const desktopImage = "./background-desktop.jpeg";
const mobileImage = "./background-mobile.jpeg";

const imageSrc = ref(desktopImage);

function updateImage() {
	imageSrc.value = window.matchMedia("(max-width: 768px)").matches
		? mobileImage
		: desktopImage;
}

onMounted(() => {
	updateImage();
	window.addEventListener("resize", updateImage);
});

onUnmounted(() => {
	window.removeEventListener("resize", updateImage);
});
</script>
