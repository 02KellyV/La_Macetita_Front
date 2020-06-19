import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { hideLoader, notification, showLoader } from "../../store/actions";

function CreateUpdateItemModal(props) {
  const defaultState = {
    id: null,
    name: "",
    description: "",
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

  const removeHarvestImage = (position) => {
    const harvestImageFiltered = item.harvestImages.filter((harvestImage, index) => index !== position);
    setItem({ ...item, harvestImages: harvestImageFiltered });
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
                harvest_images: item.harvestImages,
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
              <label>Descripción</label>
              <textarea
                className="form-control"
                value={item.description}
                required={true}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
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
