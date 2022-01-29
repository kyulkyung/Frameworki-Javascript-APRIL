import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	}
];

export const footerData = [
	{
		title: 'Główne',
		links: ['O Zespole', 'Członkostwo', 'Zarejestruj się'],
	},
	{
		title: 'Zespół',
		links: ['Dyskografia', 'Grafik', 'Historia'],
	},
	{
		title: 'Multimedia',
		links: ['Zdjęcia', 'Teledyski', 'Fancamy'],
	},
	{
		title: 'Więcej',
		links: ['Polityka prywatności', 'Terms of Service'],
	},
];
