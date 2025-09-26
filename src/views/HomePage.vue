<template>
	<div class="h-screen background bg-fixed bg-cover bg-no-repeat bg-center">
		<header-light />
	</div>
</template>

<script setup lang="ts">
import HeaderLight from "../components/HeaderLight.vue";
</script>

<style>
.background {
	background-image: url("/background-mobile.jpeg");

	@media (width >= 48rem /* 768px */) {
		background-image: url("/background-desktop.jpeg");
	}
}
</style>
