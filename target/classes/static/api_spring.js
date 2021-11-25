import { getUserInfo } from "./localStorage.js"

// PRODUCT API
export const getProductSpring = async (id) => {
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

export const getProductsSpring = async (searchKeyword = "") => {
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

export const createProductSpring = async (product) => {
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

export const updateProductSpring = async (product) => {
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

export const deleteProductSpring = async (productId) => {
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
export const getUsersSpring = async () => {
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

export const signinSpring = async (params) => {
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

export const registerSpring = async ({ name, email, password, isAdmin }) => {
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

export const updateSpring = async ({ name, email, password, isAdmin }) => {
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
export const createOrderSpring = async (order) => {
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

export const getOrdersSpring = async () => {
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

export const getOrderSpring = async (id) => {
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

export const getMyOrdersSpring = async () => {
  try {
    const { token, _id } = getUserInfo();
    console.log(_id)
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

export const deleteOrderSpring = async (orderId) => {
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

export const getPaypalClientIdSpring = async () => {
  try {
  const response = await fetch(`/api/paypal/clientId`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const msg = JSON.parse(await response.text());
    throw new Error(`${response.status} ${msg.message}`);
  }
  return await response.json();
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
  // if (response.statusText !== "OK") {
  //   throw new Error(response.data.message);
  // }
  // return response.data.clientId;
};

export const payOrderSpring = async (orderId, paymentResult=true) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/${orderId}/pay`, {
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

export const deliverOrderSpring = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`/api/orders/${orderId}/deliver`, {
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

export const getSummarySpring = async () => {
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