import { getUserInfo } from "./localStorage.js"

// PRODUCT API
export const getProduct = async (id) => {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
    // return data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const getProducts = async (searchKeyword = "") => {
  try {
    let queryString = "?search";
    if (searchKeyword) 
      queryString += `=${searchKeyword}`;
    else
      queryString += `=all`

    const response = await fetch(`/api/products${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const createProduct = async (product) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const updateProduct = async (product) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const deleteProduct = async (productId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

// USER API
// { email, password })
export const getUsers = async () => {
  try {
    const response = await fetch(`/api/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
    // return data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const signin = async (params) => {
  try {
    const response = await fetch(`/users/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const register = async ({ name, email, password, isAdmin }) => {
  try {
    const response = await fetch(`/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        isAdmin
      }),
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const update = async ({ name, email, password, isAdmin }) => {
  try {
    const { _id, token } = getUserInfo();
    const response = await fetch(`/api/users/${_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
        password,
        isAdmin,
      }),
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

// ORDER API
export const createOrder = async (order) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
    // console.log(response)
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const getOrders = async () => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const getOrder = async (id) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const getMyOrders = async () => {
  try {
    const { token, _id } = getUserInfo();
    // console.log(_id)
    const response = await fetch(`/api/orders/mine/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text()); 
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

// export const getPaypalClientId= async () => {
//   try {
//   const response = await fetch(`/api/paypal/clientId`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!response.ok) {
//     const msg = JSON.parse(await response.text());
//     throw new Error(`${response.status} ${msg.message}`);
//   }
//   return await response.json();
//   } catch (err) {
//     console.log(err);
//     return { error: err.message };
//   }
  // if (response.statusText !== "OK") {
  //   throw new Error(response.data.message);
  // }
  // return response.data.clientId;
// };

export const payOrder = async (orderId, paymentResult=true) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/pay/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentResult),
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const deliverOrder = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/deliver/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const getSummary = async () => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${msg.message}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};