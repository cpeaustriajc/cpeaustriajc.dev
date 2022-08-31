<script lang="ts">
	export let src = {
		mp4: "",
		webm: "",
	};
</script>

<video width="1280" class="rounded border-2 border-gray-600" autoplay playsinline muted loop>
	<source src={src.webm} type="video/webm" />
	<source src={src.mp4} type="video/mp4" />
	Sorry, your browser doesn't support embedded videos.
</video>
