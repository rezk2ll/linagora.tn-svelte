<script lang="ts">
	import InvertedWave from './inverted-wave.svelte';
	import Wave from './wave.svelte';
</script>

<Wave />
<section class="container mx-auto text-center py-6 mb-12" id="opensource">
	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
		Pourquoi choisir le logiciel libre ?
	</h1>
	<div class="w-full mb-4">
		<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
	</div>
	<p class="my-4 text-3xl leading-tight">
		Le logiciel libre est de nos jours utilisé par de nombreuses organisations, sur toutes les
		briques du système d'information.
	</p>
	<br />
	<div
		class="flex flex-row justify-center items-center max-h-screen bg-app bg-center bg-no-repeat bg-cover"
	>
		<main
			class="flex flex-col lg:flex-row backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden w-full max-w-5xl m-4 lg:m-6"
		>
			<div class="flex-1 p-4 lg:p-6">
				<div class="text-lg text-white mb-8 flex items-center">
					<svg
						class="w-10 h-10"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
					>
						<path
							d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"
						/></svg
					>
					<div class="ml-4 font-bold">Quels en sont les avantages ?</div>
				</div>
				<div class="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
					<div
						class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined"
					>
						<div class="text-white absolute right-2">
							<svg
								class="w-10 h-10"
								fill="currentColor"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"
								/></svg
							>
						</div>
						<div class="text-white text-lg font-medium mb-2 mt-4">Agilité</div>
						<div class="text-white font-normal">
							Adoptez les standards ouverts pour plus d'interopérabilité.
						</div>
					</div>
					<div
						class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined"
					>
						<div class="text-white absolute right-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-10 h-10"
								fill="currentColor"
								viewBox="0 0 288 512"
							>
								<path
									d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
								/></svg
							>
						</div>
						<div class="text-white text-lg font-medium mb-2 mt-4">Économie</div>
						<div class="text-white font-normal">
							Utilisez-les et redistribuez-les sans aucun coût de licence
						</div>
					</div>
					<div
						class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined"
					>
						<div class="text-white absolute right-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-10 h-10"
								fill="currentColor"
								viewBox="0 0 512 512"
							>
								<path
									d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
								/></svg
							>
						</div>
						<div class="text-white text-lg font-medium mb-2 mt-4">Adaptation</div>
						<div class="text-white font-normal">
							Modifiez le logiciel pour l'adapter à vos besoins spécifiques.
						</div>
					</div>
					<div
						class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined"
					>
						<div class="text-white absolute right-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
								class="w-10 h-10"
								fill="currentColor"
							>
								<path
									d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
								/></svg
							>
						</div>
						<div class="text-white text-lg font-medium mb-2 mt-4">Indépendance</div>
						<div class="text-white font-normal">
							Reprenez le contrôle de votre SI, allongez le cycle de vie de vos logiciels.
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</section>
<InvertedWave />