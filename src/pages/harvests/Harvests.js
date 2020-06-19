import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";
import CreateUpdateItemModal from "./CreateUpdateItemModal";
import DeleteItemModal from "./DeleteItemModal";

const Wrapper = styled.div``;

function Harvests() {
  const [item, setItem] = useState({
    name: "",
  });
  const [harvests, setHarvests] = useState([]);
  const [create, setCreate] = useState(true);
  const [createUpdateItemModal, setToggleCreateUpdateItemModal] = useState(false);
  const [deleteItemModal, setToggleDeleteItemModal] = useState(false);

  useEffect(() => {
    getHarvest();
  }, []);

  const getHarvest = () => {
    axios(`http://www.lamacetita.com:8000/api/harvests?search=fresas&page=1&total=10`).then(
      (response) => {
        setHarvests(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const toggleCreateUpdateItemModal = () => {
    setToggleCreateUpdateItemModal(!createUpdateItemModal);
  };

  const toggleDeleteItemModal = () => {
    if (deleteItemModal) {
      setItem({});
    }
    setToggleDeleteItemModal(!deleteItemModal);
  };

  return (
    <Wrapper>
      <Menu />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2>Cosechas</h2>

            <button
              type="button"
              className="btn btn-primary mb-2 ml-3 float-right"
              onClick={() => {
                setCreate(true);
                setItem({});
                toggleCreateUpdateItemModal();
              }}
            >
              Crear
            </button>
            <CreateUpdateItemModal
              item={!create ? item : { [item]: {} }}
              itemName="Cosecha"
              createUpdateItemModal={createUpdateItemModal}
              toggleCreateUpdateItemModal={toggleCreateUpdateItemModal}
              create={create}
            />

            <DeleteItemModal
              itemName="Cosecha"
              id={item.id}
              name={item.name}
              deleteItemModal={deleteItemModal}
              toggleDeleteItemModal={toggleDeleteItemModal}
            />
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
                {harvests.map((harvest, index) => (
                  <tr key={harvest._id}>
                    <td className="align-middle">{harvest.name}</td>
                    <td className="align-middle">{harvest.description}</td>
                    <td className="align-middle">
                      <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCreate(false);
                          setItem({ ...harvest });
                          toggleCreateUpdateItemModal();
                        }}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setItem({ ...harvest });
                          toggleDeleteItemModal();
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
