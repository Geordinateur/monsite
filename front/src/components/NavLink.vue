<script>
export default {
	name: 'NavLink',
	props: ['url', 'text', 'icon']
}
</script>

<template>
	<router-link class="nav__link" :to="url"> <i :class="icon"></i> <span>{{ text }}</span></router-link>
</template>