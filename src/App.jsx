import Title from './components/title/Title';

const App = () => {
	// return <Title />;

	// Si quiero ponerle diferentes colores a los titulos:

	return (
		<>
			<Title color='blue' size='1rem' />
			<Title color='red' size='2rem' />
			<Title color='green' size='3rem' />
			<Title color='black' size='4rem' />
		</>
	);
	
};

export default App;
