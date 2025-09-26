<template>
	<div
		class="background h-screen overflow-y-auto bg-cover bg-fixed bg-center bg-no-repeat pt-96 md:pt-32">
		<bicycle-logo
			class="fill-light stroke-light mx-auto mb-2 max-w-xl px-4" />
		<header-light class="mb-4" />
		<div class="mx-auto grid w-fit grid-cols-2 gap-4">
			<link-button
				href="https://www.strava.com/clubs/1458153"
				class="justify-self-end">
				Strava
			</link-button>
			<link-button
				href="https://www.instagram.com/oslostrada/"
				class="justify-self-start">
				Instagram
			</link-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import BicycleLogo from "../components/BicycleLogo.vue";
import HeaderLight from "../components/HeaderLight.vue";
import LinkButton from "../components/LinkButton.vue";
</script>

<style>
.background {
	background-image: url("/background-mobile.jpeg");

	@media (width >= 48rem /* 768px */) {
		background-image: url("/background-desktop.jpeg");
	}
}
</style>
