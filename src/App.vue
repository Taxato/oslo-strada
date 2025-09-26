<template>
	<nav>
		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
	</nav>
	<router-view />
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>
