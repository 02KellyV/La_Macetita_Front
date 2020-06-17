import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";

const Wrapper = styled.div``;

function Harvests() {
  const [harvests, setHarvests] = useState([]);

  useEffect(() => {
    getHarvest();
  }, []);

  const getHarvest = () => {
    axios(`http://localhost:8000/api/harvests`).then(
      (response) => {
        setHarvests(response.data.data);
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
            <h2>Cosechas</h2>
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
                  <th scope="col">Name</th>
                  <th scope="col">Descripción</th>
                  <th scope="col" className="actions">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {harvests.map((harvest, index) => (
                  <tr key={harvest.id}>
                    <td className="align-middle">{harvest.name}</td>
                    <td className="align-middle">{harvest.description}</td>
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

export default Harvests;
