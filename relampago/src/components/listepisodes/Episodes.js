import React, { useState, useEffect } from 'react'
import Banner from '../banner/Banner'
import { firestore } from '../../firebase-config';
import GridEpisodes from './GridEpisodes'
import '../../css/episodes.css'
import { useSearchParams, useParams } from "react-router-dom";
import InfoSerie from './InfoSerie';
import { setDoc, doc, getDoc, collection, getDocs, query, where } from "@firebase/firestore";
import LoadingScreen from '../LoadingScreen';


function Episodes() {
  let { id } = useParams(); //ID GET FROM URL
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    const docRef = doc(firestore, "Series", id);
    const docSnap = getDoc(docRef);
    docSnap
      .then((doc) => {
        if (doc.exists) {
          const userData = {
            id: doc.data().id,
            nombre: doc.data().nombre,
            sinopsis: doc.data().sinopsis,
            logo: doc.data().logo,
            fondo: doc.data().fondo,
          };
          setSerie(userData);
        } else {
        }
      })
      .catch((error) => {
      });
  }, [id, firestore]);
  return (
    <>
      {serie? (
        <div>
          <Banner />
          <InfoSerie logo={serie.logo}
              fondo={serie.fondo}
              sinopsis={serie.sinopsis}
            />
          <GridEpisodes id={id} />

        </div>
      )
        : (
          <div>
            <LoadingScreen/>
          </div>
        )}
    </>
  )
}

export default Episodes