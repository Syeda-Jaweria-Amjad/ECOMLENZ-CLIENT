import React, { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "#e8f9f0",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#c6f3da",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: "#1dbf73",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l1.94 1.94 3.64-4.29z" />
            </svg>
          </div>
        </div>
      </div>
      <h1 style={{ marginTop: "20px", color: "#2c2c54", fontSize: "24px" }}>
        Payment Successful
      </h1>
    </div>
  );
};

export default PaymentSuccess;
