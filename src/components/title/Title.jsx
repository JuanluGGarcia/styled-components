import { StyledTitle } from "./styles";

// const Title = () => {
//     return <StyledTitle>Hola</StyledTitle>
// };

// Pintando titulos de diferentes colores
const Title = (props) => {
    return <StyledTitle color={props.color} size={props.size}>Hola</StyledTitle>
};

export default Title;