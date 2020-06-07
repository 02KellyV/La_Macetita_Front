import React, { useEffect } from 'react';
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
            <section className= "banner">
                <img src={BannerImage} alt="girl-carrot" ></img>
            </section>
            <aside className= "carrots">
                <figure className="carrots3" id="carrots3">
                    <img src={CarrotImage} alt="3-carrots"></img>
                    <div className="shape mask"></div>
                    <div className="shape2 mask"></div>
                    <div className="shape3 mask"></div>
                </figure>
            </aside>
        </div>
    );
}
export default Contact;