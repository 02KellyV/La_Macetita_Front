import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";
import CreateUpdateItemModal from "./CreateUpdateItemModal";
import DeleteItemModal from "./DeleteItemModal";

const Wrapper = styled.div``;

function Products() {
  const [item, setItem] = useState({
    name: "",
  });
  const [products, setProducts] = useState([]);
  const [create, setCreate] = useState(true);
  const [createUpdateItemModal, setToggleCreateUpdateItemModal] = useState(false);
  const [deleteItemModal, setToggleDeleteItemModal] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios(`http://www.lamacetita.com:8000/api/products?search=fresas&page=1&total=10`).then(
      (response) => {
        setProducts(response.data.data);
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
            <h2>Products</h2>

            <button
              type="button"
              className="btn btn-primary mb-2 ml-3 float-right"
              onClick={() => {
                setCreate(true);
                setItem({});
                toggleCreateUpdateItemModal();
              }}
            >
              Create
            </button>
            <CreateUpdateItemModal
              item={!create ? item : { [item]: {} }}
              itemName="Product"
              createUpdateItemModal={createUpdateItemModal}
              toggleCreateUpdateItemModal={toggleCreateUpdateItemModal}
              create={create}
            />

            <DeleteItemModal
              itemName="Product"
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
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col" className="actions">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle">{product.description}</td>
                    <td className="align-middle">
                      <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCreate(false);
                          setItem({ ...product });
                          toggleCreateUpdateItemModal();
                        }}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger mr-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setItem({ ...product });
                          toggleDeleteItemModal();
                        }}
                      >
                        Delete
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
