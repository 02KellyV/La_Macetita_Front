import React from "react";
import styled from "styled-components";
import Menu from "../../common/menu/Menu";
import Footer from "../../common/footer/Footer";

const Wrapper = styled.div``;

function AboutUs() {
  return (
    <Wrapper>
      <Menu />
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h1>About us</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p>
              Somos Kelly Villa y Mary Serna creedoras de “La Macetita” directory harvest. A todos nos gusta alimentarnos bien, pero no siempre
              tenemos a la mano lugares que puedan proveernos alimentos orgánicos libres de transgénicos. “Por problemas de salud cambie mi
              alimentación pero ademas de eso quería darle un plus a esa alimentación y consumir alimentos orgánicos” Mary
            </p>
            <p>
              “Me encanta cocinar y mezclar sabores, cada fin de semana madrugo en busca de mis ingredientes, apoyo 100% la labor del campo y me gusta
              comprar alimentos frescos y no hay mejor lugar para obtenerlos que una huerta” Kelly
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default AboutUs;
