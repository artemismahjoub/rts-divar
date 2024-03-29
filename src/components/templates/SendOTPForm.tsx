import React from "react";
import { toast } from "react-toastify";
import { sendOTP } from "services/auth";

import styles from "./SendOTPForm.module.css";

type Props = {
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SendOTPForm = ({ mobile, setMobile, setStep }: Props) => {
  const showToastMessage = () => {
    toast.error("خطا در ارسال کد تایید");
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOTP(mobile);
    if (response) setStep(2);
    if (error) {
      console.log(error.response.data.message);
      showToastMessage();
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="09111211112"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOTPForm;
