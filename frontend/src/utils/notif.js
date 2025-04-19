import { toast } from 'react-toastify';

export const addProductNotif = (message) => {
    toast.success(message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "colored",
        style: {
          background: "#c90000",
          color: "yellow"
        },
    });
}

export const productExistsNotif = (message) => {
    toast.info(message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "colored",
    })
}


export const addProductErrorNotif = (message) => {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 2000,
    });
}

export const checkOutBasketNotif = (message) => {
    toast.success(message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        pauseOnHover: false,
        style: {
          background: 'green',
          color:'white'
        }
    })
}