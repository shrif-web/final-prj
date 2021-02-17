import React from "react";

export default function UserDashboardHeader() {
  return (
    <>
      <div
        className="Dashboard-header"
        style={{
          marginTop: "3%",
        }}
      >
        <div
          className="row"
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.15)",
            height: "100%",
          }}
        >
          <h1>پنل کاربری</h1> 
        </div>
      </div>
    </>
  );
}
