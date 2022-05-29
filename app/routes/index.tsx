import BackgroundAboutDesktop from "@/assets/background/AboutMustang.png";
import BackgroundAboutMobile from "@/assets/background/AboutJeep.png";
import * as Styles from "@/styles/pages/home";
import Button from "@/components/button";
import useDimensions from "@/hooks/useDimensions";
import { useCars } from "@/contexts/Cars";
import Calendar from "@/assets/icons/calendar.svg";
import People from "@/assets/icons/people.svg";
import MaxVelocity from "@/assets/icons/maxVelocity.svg";
import Flash from "@/assets/icons/flash.svg";

const Home = () => {
	const { width: WindowWidth } = useDimensions();
	const { cars } = useCars();

	return (
		<Styles.Container>
			<Styles.Landing />

			<Styles.Cars>
				{cars.length === 0 && <h1>Nenhum Carro Ainda foi cadastrado :(</h1>}

				{cars.map((car, key) => {
					return (
						<Styles.CarContainer key={key}>
							<img
								src="https://motortudo.com/wp-content/uploads/2020/08/Fuscao-1500-1971-Carros-Antigos-32.jpg"
								alt=""
								className="imageUpBox"
							/>
							<Styles.Car>
								<span className="title">{car.name}</span>
								<div>
									<img src={Calendar} alt="" />
									{car.year}
								</div>
								<div>
									<img src={MaxVelocity} alt="" />
									{car.maxVelocity} Km/h
								</div>
								<div>
									<img src={Flash} alt="" />
									{car.noteEconomics}/10
								</div>
								<div>
									<img src={People} alt="" />
									{car.noteUsers}/10
								</div>
								<Button reverseColor showBorder>
									Ver Carro
								</Button>
							</Styles.Car>
						</Styles.CarContainer>
					);
				})}
			</Styles.Cars>

			<Styles.About id="sobre">
				{WindowWidth !== 0 && WindowWidth >= 780 ? (
					<img src={BackgroundAboutDesktop} alt="" />
				) : (
					<img src={BackgroundAboutMobile} alt="" />
				)}
				<div className="BlurContainer">
					<div className="Blur">
						<span>Mustang</span>
						<p>
							O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
							Company. O carro foi apresentado ao público em 17 de abril de 1964
							durante a New York World's Fair. O Mustang, apesar de ter sofrido
							grandes alterações ao longo dos anos é a mais antiga linha de
							automóveis da Ford.
						</p>
						<Button showReverseBorder reverseColor ghost>
							Ver carros
						</Button>
					</div>
				</div>
			</Styles.About>
		</Styles.Container>
	);
};

export default Home;
