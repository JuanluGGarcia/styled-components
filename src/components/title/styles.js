// Hay que construir componentes estilizados así que a la hora de darle nombre, siguen la misma regla que los componentes:
// StyledNombreComponente

// La ventaja de styled-components es que si tenemos varios titulos de diferentes colores, NO TENEMOS que crearnos 4 clases con los diferentes colores.

import styled from 'styled-components';

// const StyledTitle = styled.h1`
//     color:red;
//     font-size: 3rem
// `;

// Pintando los titulos de varios colores
const StyledTitle = styled.h1`
	color: ${props => props.color};
	font-size: ${props => props.size};
    background-color: steelblue;

    &:hover {
        opacity: .5;
    }

`;

export { StyledTitle };
