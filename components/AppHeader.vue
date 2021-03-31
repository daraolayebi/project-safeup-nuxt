<template>
    <div class="container-fluid">
        <header>
            <p class="title">Project SafeUp</p>
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
    </div>
</template>

<script>
export default {
	name: "AppHeader",
};
</script>

<style lang="scss">
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: $color-cream;
}
.title {
	text-transform: uppercase;
}
</style>
