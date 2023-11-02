import React, { useState } from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./UserProfile.css";
import moment from "moment";
import EditProfile from "./EditProfile";
import ProfileBio from "./ProfileBio";

const UserProfile = ({ slideIn, handleSlideIn, theme }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);

  const [Switch, setSwitch] = useState(false);

  return (
    <div
      className={theme ? "home-container-1 theme-set-c-1" : "home-container-1"}
    >
      <LeftSideBar
        slideIn={slideIn}
        handleSlideIn={handleSlideIn}
        theme={theme}
      />
      <div
        className={
          theme ? "home-container-2 theme-set-c-2" : "home-container-2"
        }
      >
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div
                className={theme ? "user-name  theme-user-name" : "user-name"}
              >
                <h1>{currentProfile?.name}</h1>
                <p>Jioned {moment(currentProfile?.jionedOn).fromNow()} </p>
              </div>
            </div>

            {currentUser?.result._id === id && (
              <button
                type="button"
                className="edit-profile-btn"
                onClick={() => setSwitch(true)}
              >
                Edit profile
              </button>
            )}
          </div>
          <div>
            {Switch ? (
              <EditProfile
                currentUser={currentUser}
                setSwitch={setSwitch}
                theme={theme}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
