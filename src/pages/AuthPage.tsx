import React, { useState } from "react";
import SendOTPForm from "components/templates/SendOTPForm";
import CheckOTPForm from "components/templates/CheckOTPForm";

type Props = {};

const AuthPage = (props: Props) => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOTPForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOTPForm
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default AuthPage;
