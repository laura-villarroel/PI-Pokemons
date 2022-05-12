import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {getPokemon} from '../../redux/actions/actionsCreators.js'
import StyledForm from './SlyledSearch.jsx'

export default function SearchBar(){
    // creamos un estado local de mensajes
    const [msg, setMsg] = useState("");
    const [name, setName] = useState()

    const dispatch = useDispatch()

    const handleImputChange = (e) =>{
        e.preventDefault()
        setName(e.target.value)
        setMsg('')
    }

    function handleSubmit(e){
        e.preventDefault()
        if (name){
        dispatch(getPokemon(name))
        setName('')
        setMsg('')
    }
        else{
            setMsg("Please write a name");
        }
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
            {msg.length > 0 && (
          <div className="mensaje">
            <p>{msg}</p>
            </div>
        )}
            
        </StyledForm>
    )
}