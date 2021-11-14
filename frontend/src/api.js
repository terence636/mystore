import { apiUrl } from "./config.js";
import { getUserInfo } from "./localStorage.js"

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const msg = JSON.parse(await response.text());
      throw new Error(`${response.status} ${msg.message}`);
    }
    return await response.json();
    // return data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const getProducts = async ({ searchKeyword = "" }) => {
  try {
    let queryString = "?";
    if (searchKeyword) queryString += `searchKeyword=${searchKeyword}&`;

    const response = await fetch(`${apiUrl}/api/products${queryString}`, {
      method: "GET",
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
};

// { email, password })
export const signin = async (params) => {

  try {
    const response = await fetch(`${apiUrl}/api/users/signin`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
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
};

export const register = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${apiUrl}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
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
};

export const update = async ({ name, email, password }) => {
  try {
    const { _id, token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/users/${_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
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
};

export const createOrder = async (order) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders`, {
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
      throw new Error(`${response.status} ${msg.message}`);
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
    const response = await fetch(`${apiUrl}/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
};

export const getOrder = async (id) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
};

export const getMyOrders = async () => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders/mine`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
};

export const deleteOrder = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
};

export const getPaypalClientId = async () => {
  try {
  const response = await fetch(
    `${apiUrl}/api/paypal/clientId`, {
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

export const payOrder = async (orderId, paymentResult) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders/${orderId}/pay`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentResult),
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
};
export const deliverOrder = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders/${orderId}/deliver`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
};

export const getSummary = async () => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrl}/api/orders/summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
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
};