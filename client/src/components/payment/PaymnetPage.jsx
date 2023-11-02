import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import LeftSideBar from "../leftSideBar/LeftSideBar";
<<<<<<< HEAD
import { updateSubScription } from "../../actions/Users";
// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://stack-overflow-backend-gwva.onrender.com";

const PaymnetPage = ({ slideIn, handleSlideIn, theme }) => {
=======
// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://stack-overflow-backend-gwva.onrender.com";

const PaymnetPage = ({ slideIn, handleSlideIn }) => {
>>>>>>> 0e0477ffc06093ff8bfda3eda1efbc083ee33049
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState({
    name: "",
    price: 0,
    noOfQuestion: 1,
  });

  const user = useSelector((state) => state.currentUserReducer);
  const initPayment = (data) => {
    const options = {
      key_id: "rzp_test_rapXzN2LE3aAAy",
      amount: data.amount,
      currency: data.currency,
      name: user.result.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `${BASE_URL}/payment/verify`;
          const { data } = await axios.post(verifyUrl, response);
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: user.result.name,
        email: user.result.email,
      },
      notes: {
        address: "Hello User",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async () => {
    if (user) {
      try {
        const orderUrl = `${BASE_URL}/payment/pay`;
        if (amount.price === 0) {
          alert("please select valid subscription");
        } else {
          const { data } = await axios.post(orderUrl, { amount: amount.price });
<<<<<<< HEAD
          initPayment(data.data);
        }
        const updationUrl = `${BASE_URL}/payment/updateSubscription/${user.result._id}`;
        const userUpdation = await axios.post(updationUrl, {
          subscriptionPlan: amount.price,
          noOfQuestion: amount.noOfQuestion,
        });
        console.log(userUpdation.data.updateUser.subscriptionPlan);
        dispatch(
          updateSubScription(user.result._id, {
            noOfQuestinOfPlan: userUpdation.data.updateUser.noOfQuestinOfPlan,
            subscriptionPlan: userUpdation.data.updateUser.subscriptionPlan,
          })
        );
=======
          console.log(data);
          initPayment(data.data);
        }
>>>>>>> 0e0477ffc06093ff8bfda3eda1efbc083ee33049
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("LOGIN is required");
      navigate("/Auth");
    }
  };
  return (
<<<<<<< HEAD
    <div
      className={
        theme
          ? "home-container-1 subscription-main theme-set-c-1"
          : "home-container-1 subscription-main"
      }
    >
      <LeftSideBar
        slideIn={slideIn}
        handleSlideIn={handleSlideIn}
        theme={theme}
      />
      <div
        className={
          theme
            ? "home-container-2 sub-subscription theme-set-c-2"
            : "home-container-2 sub-subscription"
        }
      >
        <u>
          <h1 className="subscription-heading">Subscription Plan's</h1>
        </u>
        <div className="select-subscription">
          <div
            className="each-subscription"
            onClick={() =>
              setAmount({ name: "Normal", price: 100, noOfQuestion: 3 })
            }
=======
    <div className="homme-conatiner-1 subscription-main">
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2 sub-subscription">
        <u><h1 className="subscription-heading">Subscription Plan's</h1></u>
        <div className="select-subscription">
          <div
            className="each-subscription"
            onClick={() => setAmount({ name: "Normal", price: 100 })}
>>>>>>> 0e0477ffc06093ff8bfda3eda1efbc083ee33049
          >
            <h2>Normal</h2>
            <hr className="hr-line" />
            <p>RS : 100</p>
          </div>
          <div
            className="each-subscription"
<<<<<<< HEAD
            onClick={() =>
              setAmount({ name: "Silver", price: 500, noOfQuestion: 5 })
            }
=======
            onClick={() => setAmount({ name: "Silver", price: 500 })}
>>>>>>> 0e0477ffc06093ff8bfda3eda1efbc083ee33049
          >
            <h2>Silver</h2>
            <hr className="hr-line" />

            <p>RS : 500</p>
          </div>
          <div
            className="each-subscription"
<<<<<<< HEAD
            onClick={() =>
              setAmount({ name: "Gold", price: 1000, noOfQuestion: 10 })
            }
=======
            onClick={() => setAmount({ name: "Gold", price: 1000 })}
>>>>>>> 0e0477ffc06093ff8bfda3eda1efbc083ee33049
          >
            <h2>Gold</h2>
            <hr className="hr-line" />

            <p>RS : 1000</p>
          </div>
        </div>

        <button onClick={handlePayment} className="buy_btn">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PaymnetPage;
