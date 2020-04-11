import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import { Container, Brand } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            <Brand>
                <b>Simple Login</b>
                <div>
                    <Link to="/" style={{ color: '#fff', marginLeft: 15, textDecoration: 'none', }}>Inicio</Link>
                    <Link to="/login" style={{ color: '#fff', marginLeft: 15, textDecoration: 'none', }}>Login</Link>
                </div>
            </Brand>
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={35}
                handleDiameter={20}
                offColor={shade(0.2, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    );
};

export default Header;