import React from 'react'
import img1 from './img/it.png'
import img2 from './img/adventure.png'
import img3 from './img/plantsy.png'
import img4 from './img/Hotel.png'
import img5 from './img/E-commerce.png'
import img6 from './img/Ragistration.png'
import img7 from './img/farming.png'
import img8 from './img/Food.png'
import img9 from './img/Admin.png'


export default function Portfolio() {
    return (
        <>

            <div id="portfolio">
                <div className="contatiner py-4 p-3">
                    <div className="row">
                        <div className="col-md-12 col-xxl-12 " id="about">

                            <h2>Portfolio</h2>
                            <br /><br />
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" id='portfo'>
                            <img src={img1} alt="" /> 
                            <h3>It Company</h3>
                            <p>Web Devlopment</p>            
                            <button id='buto'><i class="bi bi-eye"></i></button>                
                        </div>
                        <div className="col-lg-4" id='portfo'>
                            <img src={img2} alt="" /> 
                            <h3>Adventure</h3>
                            <p>Web Devlopment</p>
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                        <div className="col-lg-4" id='portfo'>
                            <img src={img3} alt="" /> 
                            <h3>Plantsy</h3>
                            <p>Web Devlopment</p>  
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" id='portfo'>
                            <img src={img4} alt="" /> 
                            <h3>Hotel</h3>
                            <p>Web Devlopment</p> 
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                        <div className="col-lg-4" id='portfo'>
                            <img src={img5} alt="" /> 
                            <h3>E-commerce</h3>
                            <p>Web Devlopment</p>   
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                        <div className="col-lg-4" id='portfo'>
                            <img src={img6} alt="" /> 
                            <h3>Ragistration</h3>
                            <p>Web Devlopment</p>       
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4" id='portfo'>
                            <img src={img7} alt="" /> 
                            <h3>Farming</h3>
                            <p>Web Devlopment</p>      
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                        <div className="col-lg-4" id='portfo'>
                            <img src={img8} alt="" /> 
                            <h3>Food</h3>
                            <p>Web Devlopment</p>      
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                        <div className="col-lg-4" id='portfo'>
                            <img src={img9} alt="" /> 
                            <h3>Admin Panel</h3>
                            <p>Web Devlopment</p>      
                            <button id='buto'><i class="bi bi-eye"></i></button>                

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
