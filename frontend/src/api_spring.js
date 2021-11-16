import { apiUrlSpring } from "./config.js";
import { getUserInfo } from "./localStorage.js"

export const getProductSpring = async (id) => {
  try {
    const response = await fetch(`${UrlSpring}/api/products/${id}`, {
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

export const getProductsSpring = async ({ searchKeyword = "" }) => {
  try {
    let queryString = "?";
    if (searchKeyword) queryString += `searchKeyword=${searchKeyword}&`;

    const response = await fetch(`${apiUrlSpring}/api/products${queryString}`, {
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
export const signinSpring = async (params) => {
  try {
    const response = await fetch(`${UrlSpring}/users/auth`, {
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
    const response = await fetch(`${apiUrlSpring}/users/register`, {
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
      // throw new Error(`${response.status} ${msg.message}`);
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
    const response = await fetch(`${apiUrlSpring}/api/users/${_id}/`, {
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

export const createOrderSpring = async (order) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders`, {
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

export const getOrdersSpring = async () => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders`, {
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

export const getOrderSpring = async (id) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders/${id}`, {
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

export const getMyOrdersSpring = async () => {
  try {
    const { token, _id } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders/mine/${_id}`, {
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

export const deleteOrderSpring = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders/${orderId}`, {
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

export const getPaypalClientIdSpring = async () => {
  try {
  const response = await fetch(`${apiUrlSpring}/api/paypal/clientId`, {
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

export const payOrderSpring = async (orderId, paymentResult) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders/${orderId}/pay`, {
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
export const deliverOrderSpring = async (orderId) => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders/${orderId}/deliver`, {
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

export const getSummarySpring = async () => {
  try {
    const { token } = getUserInfo();
    const response = await fetch(`${apiUrlSpring}/api/orders/summary`, {
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