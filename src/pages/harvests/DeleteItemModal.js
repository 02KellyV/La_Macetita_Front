import React from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { hideLoader, showLoader } from "../../store/actions";

function DeleteItemModal(props) {
  return (
    <Modal isOpen={props.deleteItemModal} toggle={props.toggleDeleteItemModal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onShowLoader();
          // to do: delete
          props.toggleDeleteItemModal();
        }}
      >
        <ModalHeader toggle={props.toggleDeleteItemModal}>Delete {props.itemName}</ModalHeader>
        <ModalBody>{`Are you sure you want to delete the harvest: ${props.name}?`}</ModalBody>
        <ModalFooter>
          <button className="btn btn-default" type="button" onClick={props.toggleDeleteItemModal}>
            Cerar
          </button>
          <button className="btn btn-danger" type="submit">
            Delete
          </button>
        </ModalFooter>
      </form>
    </Modal>
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
});

const connecter = connect(mapStateToProps, mapDispatchToProps);

export default connecter(DeleteItemModal);
