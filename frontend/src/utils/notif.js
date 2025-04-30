import { toast } from 'react-toastify';

export const infoMessageNotif = (message) => {
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


export const errorMessageNotif = (message) => {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 2000,
    });
}


export const successMessageNotif = (message) => {
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
