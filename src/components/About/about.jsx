import React from 'react'
import './about.css'
import backgroundImage from '../Images/Designer.png'
export default function About(){
    return(
        <>
            <div className="about_containter" style={{backgroundImage: `url(${backgroundImage})`,
                backgroundSize:'cover',width:'100%',padding:'3rem',marginBottom:'1px',}}>
                <div className="info">
                    <p>Paying Guest Facility is available for Girl Students.  Single and 2 Sharing
                         Rooms . Cot, mattress, pillow,  available. The calm and quiet atmosphere 
                         for students to study well. It is situated at Vikramapuram Hills near Baker
                          Arch and Cooperative College. Less than 600 mts to Kuravankonam Junction,
                            Kunnil Hyper Market, Kuravankonam 1.5 km from Pattom, 1.4 km from
                             Kowdiar, 1.95 km from Museum, 2.2 km from Vellayambalam, and 7.2 km 
                             from TVM Central. Affordable Rent . 02 Months Advance payable . 
                             Caretaker at PG available and House Rules will apply to all PG. <br /><br />
                   <span>Please talk to us on your requirements</span> </p>
                </div>
            </div>
        </>
    )
}