import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { hideLoader, notification, showLoader } from "../../store/actions";
import UploadFile from "./UploadFile";

function CreateUpdateItemModal(props) {
  const defaultState = {
    id: null,
    name: "",
    price: "",
    description: "",
    harvest_id: "",
    productImages: [],
  };
  const [item, setItem] = useState(defaultState);
  const [harvests, setHarvests] = useState([]);

  useEffect(() => {
    const fetchHarvests = () => {
      axios(`http://www.lamacetita.com:8000/api/harvests`).then(
        (response) => {
          setHarvests(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    fetchHarvests();
  }, []);
  useEffect(() => {
    if (props.create) {
      setItem(defaultState);
      return;
    }
    setItem({ ...item, ...props.item });
  }, [props.item]);

  const removeProductImage = (position) => {
    const productImageFiltered = item.productImages.filter((productImage, index) => index !== position);
    setItem({ ...item, productImages: productImageFiltered });
  };

  return (
    <>
      <Modal isOpen={props.createUpdateItemModal} toggle={props.toggleCreateUpdateItemModal}>
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            props.onShowLoader();
            props.mutation({
              variables: {
                id: item.id,
                name: item.name,
                discount: parseInt(item.discount),
                fabric_id: item.fabric ? item.fabric.id : null,
                frame_ids: item.frames.map((frame) => frame.id),
                product_images: item.productImages,
              },
            });
            setItem({});
            props.toggleCreateUpdateItemModal();
          }}
        >
          <ModalHeader toggle={props.toggleCreateUpdateItemModal}>
            {props.create ? "Create" : "Edit"} {props.itemName}
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" value={item.name} required={true} onChange={(e) => setItem({ ...item, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input className="form-control" value={item.price} required={true} onChange={(e) => setItem({ ...item, price: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                value={item.description}
                required={true}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Harvest</label>
              <select
                className="form-control"
                value={item.harvest_id}
                required={true}
                onChange={(e) => setItem({ ...item, harvest_id: e.target.value })}
              >
                <option value="">Seleccionar...</option>
                {harvests.map((harvest) => (
                  <option value={harvest.id}>{harvest.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Foto</label>
              <UploadFile
                value={""}
                setValue={(url) => {
                  if (url !== "") {
                    setItem({
                      ...item,
                      productImages: [...item.productImages, { path: url }],
                    });
                  }
                }}
                accept="image/*"
                path="products"
                role="products"
              />
              <div className="row mt-2">
                {item.productImages.map((productImage, index) => {
                  return (
                    <div className="col-6" key={index}>
                      <img className="img-fluid mt-3" src={productImage.path} />
                      <i
                        style={{
                          position: "absolute",
                          right: "23px",
                          bottom: "10px",
                        }}
                        className="pointer float-right icon-trash far fa-trash-alt"
                        onClick={() => {
                          removeProductImage(index);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button type="button" className="btn btn-default" onClick={props.toggleCreateUpdateItemModal}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onShowLoader: () => {
    dispatch(showLoader());
  },
  onHideLoader: () => {
    dispatch(hideLoader());
  },
  onNotification: (message, type) => {
    dispatch(notification({ message, type }));
  },
});

const connecter = connect(mapStateToProps, mapDispatchToProps);

export default connecter(CreateUpdateItemModal);
