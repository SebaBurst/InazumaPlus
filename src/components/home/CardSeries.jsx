import React from 'react'
import styles from "../../styles/card.module.css"
import { useNavigate } from 'react-router-dom';



function CardSeries({name, imgcard}) {
    const navigate = useNavigate();

    function goSeason(e, series) {
        e.preventDefault();
        navigate('/series/'+series);
       
    }    
    
    return (
        <>
        <div className={styles.card_series} onClick={(e) => goSeason(e, name)}> 
            <img src={imgcard} alt="card" />
        </div>
        </>
    )
}


export default CardSeries