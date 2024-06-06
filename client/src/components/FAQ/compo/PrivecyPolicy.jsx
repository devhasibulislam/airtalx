import React from "react";

const PrivecyPolicy = () => {
  return (
    <div>
      <h2 className="pt-3 pb-3 text-[#6F6C90] text-[18px]">
        Your Privacy Matters to Us <br />
        At Airtalx, we value your privacy and despise spam. By using our
        website, you agree to our use of your personal information as outlined
        in this Privacy Statement.
      </h2>
      <div className="mt-2">
        <h1 className="text-[22px] ml-3 text-blue-500 font-medium mb-2">
          Personal Information
        </h1>
        <p className="text-[18px] ml-6">
          We collect personally identifiable information such as name, address,
          phone number, email, and financial details when you register to use
          our services. This information is used to facilitate our relationship
          or business transactions. Rest assured, we will not sell, trade, or
          rent your personal information to third parties.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-[22px] ml-3 text-blue-500 font-medium mb-2">
        Private Information
        </h1>
        <p className="text-[18px] ml-6">
        Your card information is not stored on our servers. Our payment gateway providers, securely encrypt and store this information on your behalf.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-[22px] ml-3 text-blue-500 font-medium mb-2">
        Email Communication
        </h1>
        <p className="text-[18px] ml-6">
        Airtalx does not sell or rent email addresses. We may send you emails for notifications, transactions, relationship information, promotions, or correspondence. You can opt-out of any email communication and direct any inquiries to Airtalx Customer Service.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-[22px] ml-3 text-blue-500 font-medium mb-2">
        Non-Personal Information
        </h1>
        <p className="text-[18px] ml-6">
        We may collect non-personal information such as IP address, browser details, website visits, and HTTP cookies for research and development and to facilitate restricted website services.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-[22px] ml-3 text-blue-500 font-medium mb-2">
        IP Address and HTTP Cookies
        </h1>
        <p className="text-[18px] ml-6">
        IP addresses are used for license verification and website administration. HTTP Cookies, stored by your browser, help us track user session identity on our website. You can disable cookies, but services requiring a login to an Airtalx Service Account will need cookies enabled.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-[22px] ml-3 text-blue-500 font-medium mb-2">
        Monitoring, Enforcement, and Legal Requests
        </h1>
        <p className="text-[18px] ml-6">
        Airtalx reserves the right to monitor, review, retain, and/or disclose any information as necessary to comply with any applicable law, regulation, legal process, or governmental request.
        </p>
      </div>
    </div>
  );
};

export default PrivecyPolicy;
