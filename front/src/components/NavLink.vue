<script>
export default {
	name: 'NavLink',
	props: ['url', 'text']
}
</script>

<template>
	<router-link class="nav" :to="url">{{ text }}</router-link>
</template>