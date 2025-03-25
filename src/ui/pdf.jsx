import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Image } from '@react-pdf/renderer';




export default function MyDocument() {
    return (
        <div style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
        <main className='pdf'>
            <div className='tx' >  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, mollitia!</p> </div>
            <img src={"../../public/logo_nave.webp"} alt="" width={80} height={80} />
            <div className='texto-bold'>
                <p>Red5G</p>
                <p>Alask Ramirez</p>
                <p>Recursos Humanos</p>
            </div>
            <p style={{marginTop: "100px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias quos perferendis. At alias amet quis, accusamus exercitationem nostrum commodi, molestiae, asperiores dolores eius mollitia reiciendis autem sunt non facilis!</p>

            <p style={{marginTop: "100px"}}>Se extiende la presente constancia para los fines que considere pertinentes</p>


            <div className='border-top-pdf' style={{marginTop: "300px"}} >
dsfsdf
            </div>


        </main>

        </div>
    )
}