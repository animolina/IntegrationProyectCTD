import styled from 'styled-components';

const baseColor = '#1DBEB4';
const labelColor = '#383B58';
const baseFont = "'Roboto', sans-serif";

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
	width: 100%;
	height: 100%;
	font-family: ${baseFont};
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Button = styled.button`
	background-color: ${baseColor};
	border-color: ${baseColor};
	color: white;
	margin: 2rem 0px;
	width: fit-content;
	border-radius: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
`;

const Input = styled.input`
	font-size: 32px;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	color: '#BEBEBE';
`;

const Label = styled.span`
	color: ${labelColor};
`;

const Title = styled.h1`
	color: ${baseColor};
`;

const ButtonInnerText = styled.span`
	padding: 4rem;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
`;

const FormField = styled.div`
	margin: 1rem 0px;
	display: flex;
	flex-direction: column;
`;

export default function Login() {
	return (
		<Body>
			<Title>Iniciar Sesión</Title>
			<Form>
				<FormField>
					<Label>Correo Electrónico</Label>
					<Input type={'email'} />
				</FormField>

				<FormField>
					<Label>Contraseña</Label>
					<Input type={'password'} />
				</FormField>

				<Button>
					<ButtonInnerText>Ingresar</ButtonInnerText>
				</Button>
			</Form>
		</Body>
	);
}
