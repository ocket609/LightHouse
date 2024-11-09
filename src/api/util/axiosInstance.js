import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_API_PATH = import.meta.env.VITE_API_PATH;

// 创建axios实例
const instance = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API类型常量
const API_TYPE = {
  ADMIN: 'admin',
  USER: 'user',
};

// 动态URL生成函数
const generateUrl = (url, type = API_TYPE.USER) => {
  if (type === API_TYPE.ADMIN) {
    return `/api/${VITE_API_PATH}/admin${url}`;
  }
  return `/api/${VITE_API_PATH}/${url}`;
};

// get方法
export const $get = async (url, type = API_TYPE.USER) => {
  const reqUrl = generateUrl(url, type);
  // console.log(reqUrl);  // 這裡是正確的地方，打印生成的 URL
  try {
    const response = await instance.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    return error;
  }
};


// // post方法
// export const $post = async (url, params, type = API_TYPE.USER, config) => {
//   const reqUrl = generateUrl(url, type);
//   try {
//     const response = await instance.post(reqUrl, params, config);
//     return response.data;
//   } catch (error) {
//     console.error('Error in POST request:', error);
//     return error;
//   }
// };

// // put方法
// export const $put = async (url, params, type = API_TYPE.USER) => {
//   const reqUrl = generateUrl(url, type);
//   try {
//     const { data } = await instance.put(reqUrl, params);
//     return data;
//   } catch (error) {
//     console.error('Error in PUT request:', error);
//     return error;
//   }
// };

// // delete方法
// export const $delete = async (url, params, type = API_TYPE.USER) => {
//   const reqUrl = generateUrl(url, type);
//   try {
//     const { data } = await instance.delete(reqUrl, { params });
//     return data;
//   } catch (error) {
//     console.error('Error in DELETE request:', error);
//     return error;
//   }
// };
