import React, { useEffect, useState } from "react";
import { Mutation, Query } from "react-apollo";
import { connect } from "react-redux";
import Pagination from "../../../common/Pagination";
import { LINKS_PER_PAGE } from "../../../constants";
import { hideLoader, notification, showLoader } from "../../../store/actions";
import { ButtonSmall } from "../../../styles/theme";
import DeleteItemModal from ".././common/crudItem/DeleteItemModal";
import CreateUpdateItemModal from "./CreateUpdateItemModal";
import TableItems from "./TableItems";

function DisplayItems(props) {
  const [item, setItem] = useState({});
  const [filterQuery, setFilterQuery] = useState("");
  const [filterQueryQueryVar, setFilterQueryQueryVar] = useState("");
  const [createUpdateItemModal, setToggleCreateUpdateItemModal] = useState(false);
  const [deleteItemModal, setToggleDeleteItemModal] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(LINKS_PER_PAGE);
  const [create, setCreate] = useState(true);
  const [order, setOrder] = useState({
    field: "name",
    direction: "asc",
  });
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!filterQuery) {
      setFilterQueryQueryVar("");
    }
  }, [filterQuery]);

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
    <div>
      <Mutation
        mutation={create ? props.createItemMutation : props.updateItemMutation}
        onCompleted={() => {
          props.onHideLoader();
          props.onNotification(`${props.itemName} ${create ? "created" : "updated"}.`, "success");
        }}
        refetchQueries={() => {
          return [
            {
              query: props.getItemsQuery,
              variables: {
                first: pageSize,
                page: 1,
                filterQuery: filterQueryQueryVar,
                orderField: order.field,
                orderDirection: order.direction,
              },
            },
          ];
        }}
      >
        {(mutation, { data, error, loading, client }) => {
          if (loading) return "";
          if (error) return error.message;
          return (
            <div>
              <h3 className="mb-4">
                {props.title} ({totalItems})
              </h3>
              <ButtonSmall
                type="button"
                className="mb-2 ml-3 float-right"
                onClick={() => {
                  setCreate(true);
                  setItem({});
                  toggleCreateUpdateItemModal();
                }}
              >
                Create
              </ButtonSmall>

              <CreateUpdateItemModal
                item={!create ? item : { [item]: {} }}
                itemName={props.itemName}
                createUpdateItemModal={createUpdateItemModal}
                toggleCreateUpdateItemModal={toggleCreateUpdateItemModal}
                mutation={mutation}
                create={create}
              />
            </div>
          );
        }}
      </Mutation>

      <Mutation
        mutation={props.deleteItemMutation}
        refetchQueries={() => {
          return [
            {
              query: props.getItemsQuery,
              variables: {
                first: pageSize,
                page: 1,
                filterQuery: filterQueryQueryVar,
                orderField: order.field,
                orderDirection: order.direction,
              },
            },
          ];
        }}
        onCompleted={() => {
          props.onHideLoader();
          props.onNotification(`${props.itemName} deleted.`, "success");
        }}
      >
        {(deleteItem, { data, loading, error }) => {
          return (
            <DeleteItemModal
              itemName="Products"
              id={item.id}
              name={item.name}
              deleteItemModal={deleteItemModal}
              deleteItem={deleteItem}
              toggleDeleteItemModal={toggleDeleteItemModal}
            />
          );
        }}
      </Mutation>

      <Query
        query={props.getItemsQuery}
        variables={{
          first: pageSize,
          page: 1,
          filterQuery: filterQueryQueryVar,
          orderField: order.field,
          orderDirection: order.direction,
        }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading) return "";
          if (error) return error.message;
          setTotalItems(data[props.itemKeyName].paginatorInfo.total);
          if (page !== data[props.itemKeyName].paginatorInfo.currentPage) {
            setPage(data[props.itemKeyName].paginatorInfo.currentPage);
          }
          return (
            <>
              <form
                className="mb-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFilterQueryQueryVar(filterQuery);
                }}
              >
                <div className="row">
                  <div className="col-md-4 col-sm-7">
                    <input className="form-control" value={filterQuery} type="text" onChange={(e) => setFilterQuery(e.target.value)} />
                  </div>
                  <div className="col-md-6 col-sm-4">
                    <ButtonSmall type="submit">Search</ButtonSmall>
                  </div>
                </div>
              </form>

              <TableItems
                setItem={setItem}
                toggleCreateUpdateItemModal={toggleCreateUpdateItemModal}
                toggleDeleteItemModal={toggleDeleteItemModal}
                itemKeyName={props.itemKeyName}
                data={data}
                setCreate={setCreate}
                order={order}
                setOrder={setOrder}
              />

              <Pagination
                data={data}
                itemKeyName={props.itemKeyName}
                fetchMore={fetchMore}
                totalItems={totalItems}
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
              />
            </>
          );
        }}
      </Query>
    </div>
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

export default connecter(DisplayItems);
