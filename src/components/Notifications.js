import { toast } from "react-toastify";

export const notifyError = (msg, delay = 5000) => {
  toast.dismiss(); // Dismiss existing toast
  toast.error(msg, { autoClose: delay });
};

export const notifySuccess = (msg, delay = 5000) => {
  toast.dismiss(); // Dismiss existing toast
  toast.success(msg, { autoClose: delay });
};
