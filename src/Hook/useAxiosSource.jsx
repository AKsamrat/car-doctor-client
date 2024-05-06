import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:7000',
  withCredentials: true,
});

const useAxiosSource = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error tracked', error.response);
        if (
          error.response.status === '401' ||
          error.response.status === '403'
        ) {
          console.log('logout user');
          logOut()
            .then(() => {
              navigate('/login');
            })
            .catch(error => console.log(error));
        }
      }
    );
  }, [navigate, logOut, axiosSecure]);
  return axiosSecure;
};

export default useAxiosSource;
