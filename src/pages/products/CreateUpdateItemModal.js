import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UploadFile from "./UploadFile";
import { hideLoader, notification, showLoader } from "../../store/actions";

function CreateUpdateItemModal(props) {
  const defaultState = {
    id: null,
    name: "",
    discount: "",
    frames: [],
    fabric: null,
    productImages: [],
  };
  const [item, setItem] = useState(defaultState);

  useEffect(() => {
    if (props.create) {
      setItem(defaultState);
      return;
    }
    setItem({ ...item, ...props.item });
  }, [props.item]);

  const removeFrame = (frameId) => {
    const framesFiltered = item.frames.filter((frame) => frame.id !== frameId);
    setItem({ ...item, frames: framesFiltered });
  };

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
            {props.create ? "Crear" : "Editar"} {props.itemName}
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre</label>
              <input className="form-control" value={item.name} required={true} onChange={(e) => setItem({ ...item, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input className="form-control" value={item.price} required={true} onChange={(e) => setItem({ ...item, price: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea
                className="form-control"
                value={item.description}
                required={true}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Cosecha</label>
              <select
                className="form-control"
                value={item.description}
                required={true}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Foto</label>
              <UploadFile
                value={""}
                setValue={(url) => {
                  console.log({ url });
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
              Cerrar
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
