import React, { useState, useEffect } from 'react'
import '../../css/episodes.css'
import { firestore } from '../../firebase-config';
import { setDoc, doc, getDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { useSearchParams, useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EpisodeCard from '../card/EpisodeCard';


function GridEpisodes({ id }) {

    const [episodes, setEpisodes] = useState([]);

    console.log('Ide de: ' + id)







    
    const getEpisodes = async () => {
        const querySnapshot = await getDocs(collection(firestore, "Series", id, 'episodes'))
        const traps = [];
        querySnapshot.forEach((doc) => {
            traps.push({ ...doc.data(), id: doc.id });

        })
        setEpisodes(traps);

    }
    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <div>
            <div className='episodes-header'>
                <h1>Episodios</h1>
            </div>
            <div className='grid-episodes'>
                {episodes.map((trap) => (
                    <Col key={trap.id}>
                        <EpisodeCard
                            titleEpisode = {trap.nombre}
                            image={trap.imagen}
                            idEpisode={trap.id}
                        />
                    </Col>
                ))}
            </div>
        </div>
    )
}

export default GridEpisodes