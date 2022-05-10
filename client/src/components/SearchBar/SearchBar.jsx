import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {getPokemon} from '../../redux/actions/actionsCreators.js'
import StyledForm from './SlyledSearch.jsx'

export default function SearchBar(){

    const [name, setName] = useState()

    const dispatch = useDispatch()

    const handleImputChange = (e) =>{
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if (name){
        dispatch(getPokemon(name))
        setName('')}
    }

    return(
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <input 
            type="text"
            placeholder='Search pokemon...' 
            value={name}
            onChange={(e)=>{handleImputChange(e)}}
            />
            {<button className='submit' type='submit'>search</button>}
           
            
        </StyledForm>
    )
}