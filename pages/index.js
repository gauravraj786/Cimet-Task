import { Loader } from '../components/Loader';
import { DynamicCard } from '../components/index';
import { Container, DataCount } from '../styles/StyledComponent';

import axios from 'axios';
import localforage from 'localforage';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    try {
      const storedData = await localforage.getItem('store');
      if (storedData?.expiry && Date.now() >= storedData.expiry) {
        await localforage.removeItem('store');
      } else {
        await handleToken();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleToken = async () => {
    try {
      const storedData = await localforage.getItem('store');
      if (storedData?.token) {
        await getProductList(storedData.token);
      } else {
        await getToken();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const getToken = async () => {
    try {
      const res = await axios.get('/api/getToken');
      await localforage.setItem('store', res.data);
      await getProductList(res.data.token);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getProductList = async token => {
    try {
      const res = await axios.get('/api/getProducts', {
        headers: {
          token,
        },
      });
      const { data: serverData } = res;
      const {
        data: { electricity },
        success,
        message,
      } = serverData;
      if (success) {
        setProducts(electricity);
      } else {
        if (
          message === 'Your token has been expired.' ||
          message === 'Invalid Auth-Token.'
        ) {
          await getToken();
        }
      }
    } catch (error) {
      toast.error(error.message);
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
          <DataCount>Electricity: {products.length}</DataCount>
          {products.length > 0 ? (
            products.map(item => <DynamicCard key={item.id} product={item} />)
          ) : (
            <p>
              There are currently no available products. Please try again later.
            </p>
          )}
        </Container>
      )}
    </div>
  );
};

export default ProductList;
