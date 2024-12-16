import React from "react";
import pricingstyles from "./pricingplans.module.css";
import { handleShowFailureToast } from "../ToastMessages/ToastMessage";
import { Toaster } from "react-hot-toast";

const PricingPlans = () => {
  const plans = [
    { name: "Standard", sellers: 20, price: "$35/m" },
    { name: "Pro", sellers: 40, price: "$70/m" },
    { name: "Max", sellers: 80, price: "$130/m" },
    { name: "Ultra", sellers: 200, price: "$230/m" },
  ];
  const planApiHandler = async (data) => {
    try {
      const response = await fetch(
        "https://ecomlenz-erafh6dqcbhac9fz.canadacentral-01.azurewebsites.net/auth/create-check-out-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.session) {
          window.location.href = data.session.url;
        }
      }
    } catch (error) {
      handleShowFailureToast(error.message);
    }
  };
  const planHandler = (data1) => {
    if (data1.name === "Standard") {
      const data = {
        amount: 35,
        tier: "Try Standard",
        planType: "Standard",
        sellers: 20,
      };
      planApiHandler(data);
    } else if (data1.name === "Pro") {
      const data = {
        amount: 70,
        tier: "Try Pro",
        planType: "Pro",
        sellers: 40,
      };
      planApiHandler(data);
    } else if (data1.name === "Max") {
      const data = {
        amount: 130,
        tier: "Try Max",
        planType: "Max",
        sellers: 80,
      };
      planApiHandler(data);
    } else if (data1.name === "Ultra") {
      const data = {
        amount: 230,
        tier: "Try Ultra",
        planType: "Ultra",
        sellers: 200,
      };
      planApiHandler(data);
    }
  };
  return (
    <div className={pricingstyles.pricingContainer}>
      <Toaster />
      <div className={pricingstyles.headerSection}>
        <h1 className={pricingstyles.title}>Choose a Plan</h1>
        <p className={pricingstyles.subtitle}>
          Select a plan that matches your needs. All plans come with full access
          to features.
        </p>
      </div>

      <div className={pricingstyles.contentSection}>
        <div className={pricingstyles.features}>
          <h3 className={pricingstyles.featuresTitle}>Features For You</h3>
          <p className={pricingstyles.featuresDescription}>
            Simplify your workflow with these powerful features:
          </p>
          <ul className={pricingstyles.featuresList}>
            <li>Seller Management</li>
            <li>Bookmark & Nickname Sellers</li>
            <li>All In One Product Feed</li>
            <li>Pre-populated Product Feeds</li>
            <li>Bookmark Products</li>
            <li>Saved Product Feed</li>
            <li>Pause/Activate Sellers</li>
            <li>Tag Sellers with Keywords</li>
            <li>Filter Options</li>
            <li>Keepa Chart Integration</li>
          </ul>
        </div>

        <div className={pricingstyles.plans}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${pricingstyles.planCard} ${
                pricingstyles[plan.name.toLowerCase()]
              }`}
              onClick={() => planHandler(plan)}
            >
              <h4 className={pricingstyles.planTitle}>{plan.name}</h4>
              <p className={pricingstyles.planSellers}>
                {plan.sellers} sellers
              </p>
              <p className={pricingstyles.planPrice}>{plan.price}</p>
              <button className={pricingstyles.planButton}>
                Upgrade to {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
