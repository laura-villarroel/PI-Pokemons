import styled from "styled-components";
import allColors from '../../colorsPalette/colors.js'

export const StyledFilter = styled.div`
    width: auto;
    max-height: 450px;
    margin-top: 80px;
    margin-right: 5px;
    background-color: ${allColors.colors[0]};
    padding: 30px;
    border-radius: 10px;
    color: white;
    font-size: 25px;
    position: sticky;
    top:70px;
    
    .filters{
        display: flex;
        flex-direction: column;
        color: ${allColors.colors[2]};
        font-size: 13px;
        
        select {
            margin-bottom: 10px;
            margin-top: 2px;
            padding: 6px 10px;
            color: #333333;
            background-color: #eeeeee;
            border: 1px solid #dddddd;
            cursor:pointer;
            border-radius: 5px;
        }
    }
    .link{
        color: white;
        text-decoration: none;
        cursor: pointer;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        &:hover{
            color: ${allColors.mainColor};
        }
    }
    button{
    background: rgba(44, 44, 44, 0.473);
    border: 2px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
    text-align: center;
    height: 35px;
    width: 80px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    margin: 10px;

    &:hover{
        border: 2px solid white;
        color: white;
    }
}
`