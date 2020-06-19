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
    harvest: "",
    category: "",
    photo: "",
  };
  const [item, setItem] = useState(defaultState);
  const [harvests, setHarvests] = useState([]);
  const [categories, setCategories] = useState([]);

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

    const fetchCategories = () => {
      axios(`http://www.lamacetita.com:8000/api/categories`).then(
        (response) => {
          setCategories(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    fetchHarvests();
    fetchCategories();
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
            axios.defaults.headers.common = { Authorization: `Bearer ${props.user.token}` };

            axios.post("http://www.lamacetita.com:8000/api/products", item).then(
              (response) => {
                console.log({ response });
                props.onHideLoader();
                props.onNotification("Product created!", "success");
              },
              (error) => {
                props.onHideLoader();
                props.onNotification("Something went wrong, please try again.", "error");
              }
            );
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
              <label>Price</label>
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
              <select className="form-control" value={item.harvest} required={true} onChange={(e) => setItem({ ...item, harvest: e.target.value })}>
                <option value="">Select...</option>
                {harvests.map((harvest) => (
                  <option value={harvest._id}>{harvest.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-control" value={item.category} required={true} onChange={(e) => setItem({ ...item, category: e.target.value })}>
                <option value="">Select...</option>
                {categories.map((category) => (
                  <option value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Photo</label>
              <UploadFile
                value={item.photo}
                setValue={(url) => {
                  if (url !== "") {
                    setItem({
                      ...item,
                      photo: url,
                    });
                  }
                }}
                accept="image/*"
              />
              {item.photo != "" && (
                <div className="row mt-5">
                  <div className="col">
                    <img className="img-fluid " src={item.photo} />
                    <button
                      style={{
                        position: "absolute",
                        right: "23px",
                        bottom: "10px",
                      }}
                      className="btn btn-danger btn-sm float-right"
                      onClick={() => {
                        setItem({ ...item, photo: "" });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <button type="button" className="btn btn-default" onClick={props.toggleCreateUpdateItemModal}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.Auth.user,
  };
};

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
