import React from "react";
import billingStyles from "./billing.module.css";

const Billing = () => {
  return (
    <div className={billingStyles.pageContainer}>
      {/* Left Half: Stealth Seller Section */}
      <div className={billingStyles.leftSection}>
        <div className={billingStyles.contentWrapper}>
          <h1 className={billingStyles.logo}>ECOMLENZ</h1>
          <h2 className={billingStyles.planTitle}>Try Standard</h2>
          <p className={billingStyles.trialOffer}>14 days free</p>
          <p className={billingStyles.planDetails}>
            Then <span className={billingStyles.boldText}>$35.00</span> every 30 days
          </p>

          <div className={billingStyles.planSummary}>
            <p>Standard</p>
            <p className={billingStyles.subtext}>14 days free</p>
          </div>
          <div className={billingStyles.subtotal}>
            <p>Subtotal</p>
            <p>$35.00</p>
          </div>
          <button className={billingStyles.promoCode}>Add promotion code</button>
          <div className={billingStyles.total}>
            <div>
              <p>Total after trial</p>
              <p className={billingStyles.subtext}>Total due today</p>
            </div>
            <div>
              <p>$35.00</p>
              <p className={billingStyles.highlight}>$0.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half: Payment Section */}
      <div className={billingStyles.rightSection}>
        <div className={billingStyles.contentWrapper}>
          <button className={billingStyles.linkButton}>
            Pay with <strong>Link</strong>
          </button>
          <p className={billingStyles.orText}>Or enter payment details</p>
          <form className={billingStyles.paymentForm}>
            <input
              type="email"
              placeholder="Email"
              className={billingStyles.inputField}
            />
            <div className={billingStyles.paymentMethod}>
              <label className={billingStyles.radioOption}>
                <input type="radio" name="payment" defaultChecked />
                <span>Card</span>
              </label>
              <div className={billingStyles.cardInput}>
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className={billingStyles.inputField}
                />
                <div className={billingStyles.cardDetails}>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className={billingStyles.inputFieldSmall}
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className={billingStyles.inputFieldSmall}
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Cardholder name"
                className={billingStyles.inputField}
              />
              <select className={billingStyles.inputField}>
                <option>Pakistan</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Billing;