const domiData = [
	{
		id: 1,
		title: 'Google Pixel - Black',
		img: [
			'img/cwsla.png',
			'img/product-2.png',
			'img/product-3.png',
			'img/product-4.png',
			'img/product-5.png',
			'img/product-6.png'
		],
		link: ['https://www.behance.net/gallery/88618407/Calgary-Women-Studying-Law-Association?tracking_source=for_you_feed_user_published'],
		company: 'GOOGLE',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	},
	{
		id: 2,
		title: 'Samsung S7',
		img: [
			'img/tss.png',
			'img/product-1.png',
			'img/product-3.png',
			'img/product-4.png',
			'img/product-5.png',
			'img/product-6.png'
		],
		price: 16,
		company: 'SAMSUNG',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	},
	{
		id: 3,
		title: 'HTC 10 - Black',
		img: [
			'img/ac.png',
			'img/product-1.png',
			'img/product-2.png',
			'img/product-4.png',
			'img/product-5.png',
			'img/product-6.png'
		],
		price: 8,
		company: 'htc',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	},
	{
		id: 4,
		title: 'HTC 10 - White',
		img: ['img/wps.png'],
		price: 18,
		company: 'htc',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	},
	{
		id: 5,
		title: ['HTC Desire 626s'],
		img: ['img/hpp.png'],
		price: 24,
		company: 'htc',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	},
	{
		id: 6,
		title: 'Vintage Iphone',
		img: ['img/lola.png'],
		price: 17,
		company: 'apple',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	}
	// {
	// 	id: 7,
	// 	title: 'Iphone 7',
	// 	img: ['img/product-7.png'],
	// 	price: 30,
	// 	company: 'apple',
	// 	info:
	// 		'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
	// 	inCart: false,
	// 	count: 0,
	// 	total: 0
	// },
	// {
	// 	id: 8,
	// 	title: 'Smashed Iphone',
	// 	img: ['img/product-8.png'],
	// 	price: 2,
	// 	company: 'apple',
	// 	info:
	// 		'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
	// 	inCart: false,
	// 	count: 0,
	// 	total: 0
	// }
];

const generalData = [
	{
		id: 1,
		title: 'Google Pixel - Black',
		img: ['img/ac-outlined.png'],
		price: 10,
		company: 'GOOGLE',
		info:
			'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
		inCart: false,
		count: 0,
		total: 0
	}
];

export function getData() {
	return domiData;
}
export function getGeneralData() {
	return generalData;
}
