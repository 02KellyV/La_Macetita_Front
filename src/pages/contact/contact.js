import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import Footer from "../footer/footer"

import './contact.css';
import BannerImage from '../../assets/images/Contact-utils1.png'
import CarrotImage from '../../assets/images/carrots.png'
 
function Contact(){
    useEffect(() => {
        const $var_carrot = document.getElementById('carrots3');
        //const $mask = document.getElementById('mask');
        const $masks = document.querySelectorAll(".mask");
        window.addEventListener('scroll', function(e){
          //console.log(window.scrollY);
          var position = 60 + window.scrollY;
          this.console.log($masks);
          $masks.forEach((mask)=>{
            mask.style.backgroundPosition = '-'+ position*0.5 + 'px';
          })
          //$mask.style.backgroundPosition = '-'+ position*0.5 + 'px';
          $var_carrot.style.transform = 'rotate(-'+ position*0.005 +'deg)';
        });
    }, [])

    return(
        <div>
            <header>
                <section className= "banner">
                    <img src={BannerImage} alt="girl-carrot" ></img>
                    <h1 className= "carrots-title">Contact Us!</h1>
                </section>
            </header>
            <section className= "carrots">
                <aside className= "carrots-content">
                    <figure className="carrots3" id="carrots3">
                        <img src={CarrotImage} alt="3-carrots"></img>
                        <div className="shape mask"></div>
                        <div className="shape2 mask"></div>
                        <div className="shape3 mask"></div>
                    </figure>
                </aside>
                <section className= "carrots-info">
                    <div className="info-boxes">
                        <div className="box">
                            <h3>Have some questions?</h3>
                            <p> Get help from your published products, answers from the support team,
                                or review our articles: <a href="lamacetita.com/FAQ">Common issues - FAQ</a></p>
                        </div>
                        <div className="box">
                            <h3>E-mails</h3>
                            <p>support@lamacetita.com</p>
                            <p>commercial@lamacetita.com</p>
                            <div className="icon">
                                
                            </div>
                        </div>
                        <div className="box">
                            <h3>Social</h3>
                            <p>WhatsApp: <a href="https://api.whatsapp.com/send?phone=+573006020103">Send message</a></p>
                            <p>Instagram: <a href="https://www.instagram.com/lamacetita_20/">lamacetita_20</a></p>
                            <div className="icon">

                            </div>
                        </div>
                        <div className="box">
                            <h3>Address</h3>
                            <p>From Medellín, Colombia ♡</p>
                            <div className="icon">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </section> {/* section */}
            <Footer/>
        </div>
    );
}
export default withRouter(Contact);