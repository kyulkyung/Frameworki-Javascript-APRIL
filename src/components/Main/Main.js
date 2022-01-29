import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { MainVideo, MainSection, MainText, ButtonWrapper, MainButton } from './MainStyles';

const Main = () => {
	return (
		<MainSection>
			<MainVideo src="./assets/lalalilala.mp4" autoPlay muted />
			<Container>
				<MainHeading>Dołącz do oficjalnego fanklubu</MainHeading>
				<MainText>
					Utwórz darmowe konto, a później wybierz pakiet
				</MainText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Utwórz konto</Button>
					</Link>
					<Link to ="pricing">
						<MainButton>Więcej</MainButton>
					</Link>
				</ButtonWrapper>
			</Container>
		</MainSection>
	);
};

export default Main;
