import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { Loader } from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const DataCount = styled.div`
  background: #2f5ea1;
  padding: 7px;
  color: #fff;
  display: inline-block;
  border-radius: 5px;
`;

const Container = styled.div`
  padding: 16px;
`;
const localStorageItems = {
  setItem: function (key, value, expiry) {
    const newValue = {
      value,
      expiry: new Date(expiry).getTime()
    };
    localStorage.setItem(key, JSON.stringify(newValue));
  },
  getItem: function (key) {
    const data = localStorage.getItem(key);
    if (data) {
      const parsedData = JSON.parse(data);
      if (Date.now() >= parsedData?.expiry) {
        localStorage.removeItem(key);
        return;
      }
      return parsedData?.value;
    }
    return null;
  }
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getToken();
      const token = localStorageItems.getItem("token");
      if (token) {
        getProductList(token);
      } else {
        await getToken();
      }
    };

    fetchData();
  }, []);

  const getToken = async () => {
    setLoader(true);
    try {
      const res = await axios.get("/api/getToken");
      const { token, token_expire_time } = res.data;
      localStorageItems.setItem("token", token, token_expire_time);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoader(false);
    }
  };

  const getProductList = async (token) => {
    setLoader(true);
    try {
      const res = await axios.get("/api/getProducts", {
        headers: {
          token
        }
      });
      const serverData = res.data;
      if (serverData.success) {
        setProducts(serverData.data.electricity);
      } else {
        if (
          serverData.message === "Your token has been expired." ||
          serverData.message === "Invalid Auth-Token."
        ) {
          await getToken();
          toast.error(serverData.message);
        }
      }
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      {loader ? (
        <Loader />
      ) : (
        <Container>
          <DataCount>Electricity : {products.length}</DataCount>
          {products
            ? products.map((item) => <Card key={item.id} product={item} />)
            : "No Data Found"}
        </Container>
      )}
    </div>
  );
};

export default ProductList;
