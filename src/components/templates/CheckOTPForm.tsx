import React from "react";
import { checkOTP } from "services/auth";
import { setCookie } from "utils/cookie";

type Props = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const CheckOTPForm = ({ code, setCode, mobile, setStep }: Props) => {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.length !== 5) return;
    const { response, error } = await checkOTP(mobile, code);
    if (response) {
      console.log(response);
      setCookie(response.data);
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد ارسال شده</p>
      <span>کد ارسال شده به شماره ی «{mobile}» را وارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
};

export default CheckOTPForm;
