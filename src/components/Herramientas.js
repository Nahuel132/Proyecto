import React from "react";
import alargue from '../assets/alargue.png';
import Alicate from '../assets/Alicate.png';
import caladora from '../assets/caladora.png';
import martillo from '../assets/martillo.png';
import sierra from '../assets/sierra.png';
import tester from '../assets/tester.png';
const Herramientas = _ => {

    return (

        <
        div >

        <
        h1 > Herramientas del pañol < /h1> <
        img src = { alargue }
        /> <br/ >
        <
        img src = { Alicate }
        />  <br/ >
        <
        img src = { caladora }
        /> <br/ >
        <
        img src = { martillo }
        /> <br/ >
        <
        img src = { sierra }
        /> <br/ >
        <
        img src = { tester }
        />

        <
        /div>

    );
};
export default Herramientas;