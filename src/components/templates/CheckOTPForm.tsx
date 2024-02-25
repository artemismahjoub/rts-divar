import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOTP } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";

type Props = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const CheckOTPForm = ({ code, setCode, mobile, setStep }: Props) => {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.length !== 5) return;
    const { response, error } = await checkOTP(mobile, code);
    if (response) {
      navigate("/");
      refetch();
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
