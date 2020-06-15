import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";

const Wrapper = styled.div`
  color: black;

  .container {
    margin-top: 50px;
    height: auto;
    padding: 100px 0;
  }

  .search_input {
    border: 1px solid black;
  }

  .badge {
    width: 70px;
    border-radius: 0;
    padding: 5px;
  }
`;

function Search() {
  const history = useHistory();
  const match = useRouteMatch();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const search = () => {
    history.push({
      pathname: `/search/` + query,
    });
  };

  useEffect(() => {
    setQuery(match.params.query);

    const fetchData = () => {
      axios(`http://localhost:8000/api/products?search=${match.params.query}&limit=5&page=1`).then(
        (response) => {
          setProducts(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    fetchData();
  }, [match.params.query]);

  return (
    <Wrapper>
      <Menu />
      <div className="container">
        <div className="row hero-container">
          <div className="col-md-8 offset-md-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                search();
              }}
            >
              <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="search_input"
                  placeholder="Que deseas comer hoy?"
                />
                <button type="submit" className="search_button">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5">
          {products.map((product) => (
            <div className="col-3" key={product._id}>
              <div className="card">
                <span className="badge badge-success">{product.category.name}</span>
                <img src={product.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div>${product.price}</div>
                  <div>{product.harvest.name}</div>
                  <Link to="" className="btn btn-primary mt-3 d-block">
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Search;
