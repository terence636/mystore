# REST APIs
methods - end points - frontend function

## Products APIs
```
GET - api/products/{id} - getProduct(id)
GET - api/products - getProducts()
```
## Signin APIs
```
POST - api/users/signin - signin(params)
POST - api/users/register - register(params)
PUT - api/users/{id} - update(params)
```

## Order APIs
```
POST - api/orders - createOrders(order)
GET - api/orders - getOrders()
GET - api/orders/{id} - getOrder(id)
GET - api/orders/mine - getMyOrder()
GET - api/orders/summary - getSummary()
DELETE - api/orders{id} - deleteOrder(id)
```

## Payment APIs
```
GET - api/paypal/clientId - getPaypalClientId()
PUT - api/orders/${orderId}/pay - payOrder(orderId, paymentResult)
PUT - api/orders/${orderId}/deliver - deliverOrder(orderId)
```

# FRONT-END

## Local Storage Methods
```
getCartItems()
setCartItems(items)
getUserInfo()
setUserInfo(info)
clearUser()
getShipping()
setShipping(info)
getPayment()
setPayment(info)
```


## Utils Methods
```
parseRequestUrl()
redirectUser()
reRender(screen)
showLoading()
hideLoading()
showMessage()
```