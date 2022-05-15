import React from 'react';
import imgeAllTypes from '../../image/imgeAllTypes.js';
import StyledCard, { StyledLink, StyleNotFound } from './StyledCard';

export default function Card(props) {
  const { id, name, img, typePrimary, typeSecondary, attack } = props;
  const type = typeSecondary ? [typePrimary, typeSecondary] : [typePrimary];

  return (
    <>
      {props.msg ? (
        <StyleNotFound>
          <h1>{props.msg}</h1>
          <img
            src="https://c.tenor.com/aZuxB-dfJlAAAAAC/pokemon-pocket-monsters.gif"
            alt=""
          />
        </StyleNotFound>
      ) : (
        <StyledCard>
          <div className="name">
            <StyledLink to={`/pokemon/detail/${id}`}>
              <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            </StyledLink>
          </div>
          <div className="divIMG">
            <img className="mainIMG" src={img} alt="img not found" />
          </div>
          <h4>{`Attack: ${attack}`}</h4>
          <div className="type">
            {type.map(subtype => {
              return (
                <div key={subtype}>
                  <h3>{subtype.charAt(0).toUpperCase() + subtype.slice(1)}</h3>
                  <img src={imgeAllTypes[subtype]} alt="" className="typeIMG" />
                </div>
              );
            })}
          </div>
        </StyledCard>
      )}
    </>
  );
}
