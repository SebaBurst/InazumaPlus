import React from 'react'
import { setDoc, doc, getDoc, collection, getDocs, updateDoc, query, where, arrayUnion } from "@firebase/firestore";
import { firestore } from '../firebase-config';
import '../css/home.css'
function Subir() {

    async function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
       
        const id = event.target.elements.id.value;

        const imagen = event.target.elements.imagen.value;

        const next = event.target.elements.next.value;
        const nextimagen = event.target.elements.nextimagen.value;
        const url = event.target.elements.enlace.value;
        await setDoc(doc(firestore, "Series", "Fuego", "episodes", id), {
            nombre: name,
           idvideo: url,
           next: next,
           nextImagen: nextimagen,
           imagen: imagen,

        });

        window.location.reload();
    }
    return (
        <div>

            <div className='loginForm'>
                <h1>¡Registrese en DrosuCatch!</h1>
                <h2>Ingrese sus datos a continuación</h2>
                <form onSubmit={handleSubmit}>
                    <p>Nombre</p>
                    <input className="input-login" required="required" name="name" type='text' placeholder='nombre episodio' />
                    <br />

                    <p>id</p>
                    <input className="input-login" required="required" name="id" type='text' placeholder='id episodio' />
                    <br />
                    <p>imagen</p>
                    <input className="input-login" required="required" name="imagen" type='text' placeholder='imagen episodio' />
                    <br />
                    <p>siguiete</p>
                    <input className="input-login" required="required" name="next" type='text' placeholder='siguiente episodio' />
                    <br />
                    <p>imagen siguiente</p>
                    <input className="input-login" required="required" name="nextimagen" type='text' placeholder='siguiente imagen' />
                    <br />
                    <p>Url</p>
                    <input className="input-login" required="required" name="enlace" type='text' placeholder='url video' />
                    <br />




                    <button className="button-login" type="submit">
                        subir cap
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Subir