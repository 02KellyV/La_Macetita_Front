import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";

const Wrapper = styled.div``;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios(
      `http://www.lamacetita.com:8000/api/products?search=fresas&page=1&total=10`
    ).then(
      (response) => {
        setProducts(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Wrapper>
      <Menu />
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h2>Productos</h2>
            <button
              type="button"
              className="btn btn-primary btn-sm float-right"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Crear
            </button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col" className="actions">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle">{product.description}</td>
                    <td className="align-middle">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger btn-sm mr-2"
                        danger
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
}

export default Products;
