// nos  importamos los hooks que vamos a usar de react y los de react-redux
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// nos importamos las actions que vamos a utilizas
import { getAllTypes, createPokemon,getPokemon,getAllPokemons } from "../../redux/actions/actionsCreators.js";
// nos importamos Link de react-router-dom
import {Link} from "react-router-dom";
// nos importamos el estilo
import StyledCrate, { StyledRange } from "./StyledCreate.jsx";
//nos importamos los componentes que vamos a utilizar
import StyledNav from "../NavBar/StyledNav.jsx";
//nos importamos la funcion de validacion del formulario
/* import { validate } from "./validate"; */

export default function CreatePokemon() {
  // nos traemos el estado de los tipos y todos los pokemons del reduce, con useselect
  const allTypes = useSelector((state) => state.types);
  const pokemonsAll = useSelector((state) => state.pokemonsAll).map(e=>e.name);
  // creamos una nueva instancia de la ejecucion de  usedispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);

 

// Creamos un estado local del input del form useState de react
const [input, setInput] = useState({
  name: "",
  hp: 1,
  attack: 5,
  defense: 5,
  speed: 5,
  height: 0,
  weight: 0,
  img: "",
  type: [],
  typePrimary: "normal",
  typeSecondary: null,
});
// creamos un estado local de errores
const [errors, setErrors] = useState({});
// creamos un estado local de mensajes
const [msg, setMsg] = useState("");

// funcion de validacion
const validate = (input) =>{
  let errors = {};

  if(pokemonsAll.includes(input.name.toLowerCase())) {
    errors.name = "The pokemon already exists, use another name";
  }

if (!input.name) {
  errors.name = "A name is required";
} else if (!/^[a-zA-Z]+$/.test(input.name) || input.name.length > 10 ) {
  errors.name = "Name is invalid";
}

if (!input.height) {
  errors.height = "Height is required";
} else if (input.height > 200) {
  errors.height = "Height is invalid";
}

if (!input.weight) {
  errors.weight = "Weight is required";
} else if (input.weight > 10000) {
  errors.weight = "Weight is invalid";
}

if (!input.img) {
  errors.img = "an img url is required";
} else if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(input.img)
) {errors.img = "url is invalid";}

return errors;
}

// creamos las funciones que escuchan los cambios y actualizan los estados
const handleInputChange = (e) => {
  setMsg("");
    if (e.target.name === "name" || e.target.name === "img" || e.target.name === "typePrimary"|| e.target.name === "typeSecondary")
     {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });

    } else {
      

      setInput({
        ...input,
        [e.target.name]: Number(e.target.value),
      });
    }
    
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

  /*   if (e.target.name === "name"){
      if( pokemonsAll.includes(e.target.value)) 
    {setErrors( validate({...input,id:true}))}
    } */
    
      
      
  
    
    
  };

  const handleOnSubmit= (e) => {
    e.preventDefault();
    if (Object.keys(errors).length===0 && input.name)
    {dispatch(createPokemon(input));
    setMsg("Pokemon has been created");
    setInput({
      name: "",
      hp: 1,
      attack: 5, 
      defense: 5,
      speed: 5,
      height: 0,
      weight: 0,
      img: "",
      type: [],
      typePrimary: "normal",
      typeSecondary: null,
    });}
  };
  

  return (
    <StyledCrate>
      <StyledNav>
        <Link to="/home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon"
          />
        </Link>
         <div className="circulo" > 
         <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"
        alt="Pokemon"
      />
      </div>
      <div>
       <Link to="/home">
       <button>Back to Home</button>
       </Link>
       </div>
      </StyledNav>
     
      <form onSubmit={handleOnSubmit}>
        <h2>CREATE YOUR POKEMON</h2>
        <div className="inputs">
          <div>
            <h3>Name: </h3>
            <input
              name="name"
              type="text"
              value={input.name}
             onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="barrasContainer">
          
          <div>
            <label>HP: </label>
            <label>
              <StyledRange
                className="barra"
                 name="hp"
                type="range"
                value={input.hp}
                min={1}
                max={255}
                onChange={(e) => handleInputChange(e)}
              />
              {input.hp}
            </label>
          </div>

          <div>
            <label>Attack: </label>
            <label>
              <StyledRange
               name="attack"
                type="range"
                value={input.attack}
                min={5}
                max={210}
                onChange={(e) => handleInputChange(e)}
              />
              {input.attack}
            </label>
          </div>

          <div>
            <label>Defense: </label>
            <label>
              <StyledRange
               name="defense"             
                type="range"
                value={input.defense}
                min={5}
                max={230}
                onChange={(e) => handleInputChange(e)}
              />
              {input.defense}
            </label>
          </div>

          <div>
            <label>Speed: </label>
            <label>
              <StyledRange
                name="speed"
                type="range"
                value={input.speed}
                min={5}
                max={200}
                onChange={(e) => handleInputChange(e)}
              />
              {input.speed}
            </label>
          </div>

        </div>

        <div className="tam">

          <div className="tam2">
            <label>Height: </label>
            <h6>*dm - max 200 dm (1 m=10 dm)</h6>
            <input
              name="height"
              type="text"
              value={input.height}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.height && <p className="error">{errors.height}</p>}
          </div>

          <div className="tam2">
            <label>weight: </label>
            <h6>*hgr - max 10000 hgr (1 kg=10 hgr)</h6>
            <input
              name="weight"
              type="text"
              value={input.weight} 
              onChange={(e) => handleInputChange(e)}
            />
            {errors.weight && <p className="error">{errors.weight}</p>}
          </div>

        </div>

        <div className="types">
        <div>
        <label>Type Primary</label>
        <select
         name="typePrimary"
         value={input.typePrimary}
         onChange={(e) => handleInputChange(e)}
         >
         {allTypes?.map((type,i) => (
                <option value={input.type.name} key={type.id}>
                  {type.name}
                </option>
              ))}
         
        </select>
        </div>

        <div>
        <label>Type Secondary</label>
        <select
         name="typeSecondary"
         value={input.typeSecondary}
         onChange={(e) => handleInputChange(e)}
         >
         {allTypes?.map((type,i) => (
                <option value={input.type.name} key={type.id}>
                  {type.name}
                </option>
              ))}
          <option defaultValue={null} selected>
            {null}
          </option>
        </select>
        </div>

        </div>

        <div className="inputs">
          <label>Image: </label>
          <input
            className="inputIMG"
            name="img"
            type="text"
            value={input.img}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.img && <p className="error">{errors.img}</p>}
        </div>

        <button
          className="finalButton"
          type="submit"
          disabled={
            !input.name || errors.name || errors.height || errors.weight || errors.img
              ? true
              : false
          }> Create Pokemon
        </button>
        {msg.length > 0 && (
          <div className="mensaje">
            <p>{msg}</p>
            <Link to="/home">Go back to Home</Link>
          </div>
        )}
        </form>


      </StyledCrate>
)
}