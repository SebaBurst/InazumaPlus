import React, { useState, useEffect } from 'react'
import Banner from './banner/Banner'
import Video from './Video';
import Info from './Info';
import { useSearchParams, useParams } from "react-router-dom";
import { firestore } from '../firebase-config';
import { setDoc, doc, getDoc, collection, getDocs, getCountFromServer } from "@firebase/firestore";
import LoadingScreen from './LoadingScreen';

function Player() {
  let { id } = useParams(); //ID GET FROM URL
  let serie = id;
  const modifiedString = serie.replace(/\d+$/, ''); // Elimina los últimos números
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const docRef = doc(firestore, "Series", modifiedString, "episodes", id);
    const docSnap = getDoc(docRef);

    docSnap
      .then((doc) => {
        if (doc.exists) {
          const userData = {
            id: doc.data().id,
            video: doc.data().idvideo,
            provedor: doc.data().provedor,
            next: doc.data().next,
            nombre: doc.data().nombre,
            imagenNext: doc.data().nextImagen,
          };
          setEpisode(userData);
        } else {
        }
      })
      .catch((error) => {
      });
  }, [id, firestore]);

  return (
    <>
      {episode ? (
        <div>
          <Banner />
          <Video
            provedor={episode.provedor}
            videoId={episode.video}
          />
          <Info next={episode.next}
            title={episode.nombre}
            imagen={episode.imagenNext}
          />

        </div>
      ) : (
        <LoadingScreen/>
      )}
    </>
  )
}

export default Player