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
                <aside className= "carrots-info">
                    <h1 className= "carrots-title">Contact</h1>
                    <div>
                        <h3>Talk to us!</h3>
                        <p>We currently don't have a physical service center yet...
                            But, we can support u in the following channels:
                        </p>
                    </div>
                    <div>
                        <h3>WhatsApp</h3>
                        <p>Redirect Line</p>
                    </div>
                    <div>
                        <h3>Instagram</h3>
                        <p>lamacetita_20</p>
                    </div>

                    <div>
                        <h3>E-mails</h3>
                        <p>support@lamacetita.com</p>
                        <p>commercial@lamacetita.com</p>
                    </div>
                </aside>
            </section> {/* section */}
            <Footer/>
        </div>
    );
}
export default withRouter(Contact);