<template>
    <div class="home">
        <section class="home__container">
            <div class="home__hero container-fluid">
                <div class="home__hero-intro">
                    <h1>An initiative by My World of Bags</h1>
                    <h1>in response to the COVID-19 pandemic</h1>
                    <h4 class="mb-3">in partnership with</h4>
                    <img src="@/assets/images/mcf-logo.svg" alt="MasterCard Foundation logo">
                </div>
            </div>
            <div class="home__image-container">
                <div class="home__image">
                    <img src="../assets/images/DMP_1604.jpg" alt="">
                </div>
                <div class="home__image">
                    <img src="../assets/images/DMP_2449.jpg" alt="">
                </div>
                <div class="home__image">
                    <img src="../assets/images/DMP_5539.jpg" alt="">
                </div>
                <div class="home__image">
                    <img src="../assets/images/DMP_5803.jpg" alt="">
                </div>
                <div class="home__image">
                    <img src="../assets/images/Copy of DMP_6687.jpg" alt="">
                </div>
            </div>  
        </section>
    </div>
</template>

<script>
export default {
	head() {
		return {
			title: "Project SafeUp",
			meta: [
				{
					hid: "description",
					name: "description of page",
					content: "An initiative by My World of Bags in partnership with the MasterCard Foundation",
				},
			],
		};
	},
};
</script>

<style lang="scss">
.home {
	&__container {
		position: relative;
		border-bottom: 1px solid #000000;
	}
	&__image-container {
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0;
	}
}

.home__hero {
	&-intro {
		text-align: center;
		margin-top: 8rem;
	}
}

.home__image {
	flex-basis: 19%;
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
		// filter: sepia(0.6);
	}
}
h1,
h2,
h3,
h4,
h5,
h6,
u-font-h1,
u-font-h2,
u-font-h3 {
	// font-family: Flutterwave, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
	// 	sans-serif;
	// color: var(--heading-color);
	letter-spacing: -0.8px;
}
h1 {
	font-size: 5rem;
	font-weight: 500;
}

h2 {
	font-size: 4rem;
	font-weight: 500;
}

@media screen and (max-width: 980px) {
	h1 {
		font-size: 4rem;
	}
}

// @media screen and (max-width: 600px) {
// 	.u-font-h1,
// 	h1 {
// 		font-size: 3.2rem;
// 	}
// }
// .u-font-h2,
// h2 {
// 	font-size: 5rem;
// }
// @media screen and (max-width: 980px) {
// 	.u-font-h2,
// 	h2 {
// 		font-size: 4.2rem;
// 	}
// }
// @media screen and (max-width: 600px) {
// 	.u-font-h2,
// 	h2 {
// 		font-size: 3rem;
// 	}
// }
// .u-font-h3,
// h3 {
// 	font-size: 3.2rem;
// }
// @media screen and (max-width: 750px) {
// 	.u-font-h3,
// 	h3 {
// 		font-size: 2.8rem;
// 	}
// }
// @media screen and (max-width: 600px) {
// 	.u-font-h3,
// 	h3 {
// 		font-size: 2.6rem;
// 	}
// }
// .u-font-h4,
// h4 {
// 	font-size: 2.2rem;
// 	line-height: 26px;
// }
// .u-font-regular {
// 	font-size: 2rem;
// 	line-height: 32px;
// }
// @media screen and (max-width: 600px) {
// 	.u-font-regular {
// 		font-size: 1.8rem;
// 		line-height: 30px;
// 	}
// }
// .u-font-sm {
// 	font-size: 1.6rem;
// 	line-height: 26px;
// }
// .u-font-xs {
// 	font-size: 1.4rem;
// }
// .u-font-xxs {
// 	font-size: 1.2rem;
// }
// .u-font-black {
// 	font-weight: 800;
// }
// .u-font-semibold {
// 	font-weight: 600;
// }
// .u-font-medium {
// 	font-weight: 500;
// }
// .u-font-bold {
// 	font-weight: 700;
// }
</style>
