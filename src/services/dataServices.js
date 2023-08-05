
const getSession = () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const clid = JSON.parse(sessionStorage.getItem("clid"))

    return {token, clid}

}

export async function getUser() {

    const userDetails = getSession();

    const requestOption = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${userDetails.token}` }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${userDetails.clid}`, requestOption );

    if(!response.ok) {
        /*eslint-disable */ throw {message:  response.statusText, status: response.status}; /*eslint-disable */
    }

    const data = await response.json();
    return data;


}

export async function getUserOrder() {
    const userDetails = getSession();

    const requestOption = {

        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${userDetails.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${userDetails.clid}`, requestOption);
    if(!response.ok) {
        throw {message:  response.statusText, status: response.status};  /*eslint-disable */
    }

    const data = await response.json();
    return data;


}

export async function createOrder(cartList, total, user) {
    const userDetails = getSession();
    
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const requestOption = {

        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${userDetails.token}` },
        body: JSON.stringify(order)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOption);
    if(!response.ok) {
        throw {message:  response.statusText, status: response.status}; /*eslint-disable */
    }

    

    const data = await response.json();

    return data;

}