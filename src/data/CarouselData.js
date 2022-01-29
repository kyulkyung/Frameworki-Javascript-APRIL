export const data = [
	{
		title: 'Da Capo',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi hic quae architecto porro, est itaque sit libero cumque ex voluptas eum labore.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/8%EC%9B%94_31%EC%9D%BC_2018_%EC%95%A0%EA%B2%BD%EB%AE%A4%EC%A7%81%EC%9B%A8%EC%9D%B4%EB%B8%8C_%2812%29.jpg',
	},
	{
		title: 'The Ruby',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi hic quae architecto porro, est itaque sit libero cumque ex voluptas eum labore.',
		image: 'https://i.pinimg.com/originals/62/3f/2e/623f2ebb88df13ff9f32149e94e35a6d.jpg',
	},
	{
		title: 'The Blue',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi hic quae architecto porro, est itaque sit libero cumque ex voluptas eum labore.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/170115_%EB%AA%A9%EB%8F%99_APRIL_%ED%8C%AC%EC%8B%B8%EC%9D%B8%ED%9A%8C_%EC%97%90%EC%9D%B4%ED%94%84%EB%A6%B4_2Pic_%282%29.jpg',
	},
	{
		title: 'Eternity',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi hic quae architecto porro, est itaque sit libero cumque ex voluptas eum labore.',
		image: 'https://www.k-pop.pt/wp-content/uploads/2021/03/vRGOoQeEx5ZmDBdDq2T4Okcgty3K1qs4c_zxlVcaGya-nQ7M1xWs_auSzwHKzsU3yWgI6IZpXsNepKFn_E24oTBIdSkrJw-Nuv7HPX7MNbcTiEw1200-h630-rj-pp-e365.jpeg',
	},
	{
		title: 'Mayday',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi hic quae architecto porro, est itaque sit libero cumque ex voluptas eum labore.',
		image: 'https://64.media.tumblr.com/ecc8d2d4981722a88fb708014cc37406/tumblr_ora07xufBi1uafu8xo1_1280.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
