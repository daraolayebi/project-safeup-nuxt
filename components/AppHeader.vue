<template>
    <header>
        <h1 class="title">Project SafeUp</h1>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/impact">Impact</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/gallery">Gallery</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
	name: "AppHeader",
};
</script>

<style>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.title {
	text-transform: uppercase;
}
</style>
