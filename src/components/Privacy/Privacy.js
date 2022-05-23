import React from "react";

const Privacy = () => {
  const privacyStyle = {
    height: "100vh",
    paddingTop: "150px",
  };
  return (
    <div className="w-50 mx-auto" style={privacyStyle}>
      <h4>E-School Privacy Policy</h4>
      <p>
        This policy explains what information we collect when you use E-School's
        sites, services and contents. It also has information about how we
        store, use, transfer and delete that information.
      </p>

      <h6>Information we collect & how we use it</h6>
      <p>
        E-School doesn't make money from ad or any services. As you know this is
        a personal project, we don't store any of your informations. We just
        take it to show you how the functions work.
      </p>
    </div>
  );
};

export default Privacy;
