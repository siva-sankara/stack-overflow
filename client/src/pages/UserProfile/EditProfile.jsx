import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/Users";

const EditProfile = ({ currentUser, setSwitch, theme }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState("");
  const [profileImg, setProfileImg] = useState([]);

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length === 0 || tags[0] === "") {
      alert("update tags field");
      dispatch(
        updateProfile(currentUser?.result?._id, {
          name,
          about,
          tags: currentUser?.result?.tags,
        })
      );
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2
        className={
          theme
            ? "edit-profile-title-2 theme-edit-prf-title-2"
            : "edit-profile-title-2"
        }
      >
        Public Infromation
      </h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-outline ">
          <input
            onChange={handleImage}
            type="file"
            id="formupload"
            name="image"
            className="form-control"
          />
          <label className="form-label" htmlFor="form4Example2">
            Image
          </label>
        </div>
        <label htmlFor="name">
          <h3>Display name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About me :</h3>
          <textarea
            name=""
            value={about}
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched Tags</h3>
          <p>Add tgs separated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Save Profile" className="user-submit-btn" />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
