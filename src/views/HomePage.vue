<template>
	<div
		class="flex h-screen flex-col justify-end overflow-y-auto pb-48 md:justify-start md:pt-32">
		<background />
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
import Background from "../components/Background.vue";
import BicycleLogo from "../components/BicycleLogo.vue";
import HeaderLight from "../components/HeaderLight.vue";
import LinkButton from "../components/LinkButton.vue";
</script>
