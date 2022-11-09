import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styles/global';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';

function Header() {
	// const { colors, title } = useContext(ThemeContext);
	return(
		<Container>
			<Link to={'/'}>
				<img className="brand-md" src="https://printit.com.py/img/vendor/logo.svg" alt="Printit" />
			</Link>
			<div>
				<Link to="/features" className="text-decoration-none text-reset mr3">Módulos</Link>
				<Link to="/pricing" className="text-decoration-none text-reset mr3">Precios</Link>
				<Link to="/help" className="text-decoration-none text-reset mr3">Ayuda</Link>
			</div>
			<Menu />
		</Container>
	);
};

function MenuLogin() {
	const history = useHistory()
	return(
		<div>
			<Link to="/login" className="text-decoration-none text-reset">Iniciar Sesión</Link>
			<Button role={'button'} onClick={() => history.push('/register')} className="ml3">Registrarse</Button>
		</div>
	);
};

function UserMenu(props: {name: string}){
	return(
		<Link to="/account" className="text-decoration-none text-reset ml3">
			{props.name}
		</Link>
	);
};

function Menu(){
	const token = localStorage.getItem('app_token');
	const user = JSON.parse(localStorage.getItem('user') || "{}");

	if(token !== null){
		return <UserMenu name={user.name}/>;
	}
	return <MenuLogin />;
}

export default Header;