import React from "react";
import { sendOTP } from "../../services/auth";

type Props = {
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SendOTPForm = ({ mobile, setMobile, setStep }: Props) => {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOTP(mobile);
    console.log({ response, error });
  };

  return (
    <form onSubmit={submitHandler}>
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
