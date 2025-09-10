<template>
	<div class="h-screen background bg-fixed bg-cover bg-no-repeat bg-center">
		<h1
			class="uppercase text-light font-playfair text-6xl text-center pt-[40rem] drop-shadow-sm drop-shadow-black/60">
			Oslo Strada
		</h1>
		<h2
			class="text-light pt-2 uppercase text-center text-3xl drop-shadow-sm drop-shadow-black/50">
			Cycling club
		</h2>
		<h1
			class="uppercase text-dark font-playfair text-6xl text-center pt-[40rem] drop-shadow-sm drop-shadow-light/60">
			Oslo Strada
		</h1>
		<h2
			class="text-dark pt-2 uppercase text-center text-3xl drop-shadow-sm drop-shadow-light/50">
			Cycling club
		</h2>
	</div>
</template>

<script setup lang="ts"></script>

<style>
.background {
	background-image: url("../public/background-mobile.jpeg");

	@media (width >= 48rem /* 768px */) {
		background-image: url("../public/background-desktop.jpeg");
	}
}
</style>
