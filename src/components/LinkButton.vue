<template>
	<a
		:href="href"
		class="text-light rounded-sm border px-4 py-2 text-center uppercase drop-shadow-sm drop-shadow-black/50">
		<slot />
	</a>
</template>

<script setup lang="ts">
defineProps<{
	href: string;
}>();
</script>
