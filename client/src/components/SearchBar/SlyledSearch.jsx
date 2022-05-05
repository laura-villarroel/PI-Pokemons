import styled from 'styled-components'
import AllColors from '../../colorsPalette/colors.js'

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;


    input {
    margin: 5px;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 20px;
}

button{
    background: rgba(44, 44, 44, 0.473);
    border: 2px solid ${AllColors.mainColor};
    color: ${AllColors.mainColor};
    text-align: center;
    height: 35px;
    width: 80px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;

    &:hover{
        border: 2px solid white;
        color: white;
    }
}
`

export default StyledForm