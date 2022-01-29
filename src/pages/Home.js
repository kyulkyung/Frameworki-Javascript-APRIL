import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Main from '../components/Main/Main';
import { mainOne, mainTwo, mainThree } from '../data/MainData';

const Home = () => {
	return (
		<>
			<Main />
			<Features />
			<Content {...mainOne} />
			<Content {...mainTwo} />
			<Content {...mainThree} />
			<Carousel />
		</>
	);
};

export default Home;
