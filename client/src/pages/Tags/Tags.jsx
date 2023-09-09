import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import TagsList from "./TagsList";
import { tagsList } from "./Ttagslist";
import './Tagslist.css'
const Tags = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar/>
      <div className="home-container-2 tags-container">
        <h1 className="tags-h1"> Tags </h1>
        <p className="tags-p">A tag is a keyword or label that categorizes your question with other , similar question</p>
        <p className="tags-p">Using the tags makes it easier for others to find and answer your question.</p>
        <div className="tags-list-container">
            {
                tagsList.map((tag)=>{
                    return( 
                    <TagsList tag={tag} key={tagsList.id} />
                    )
                })
            }
        </div>
      </div>

    </div>
  );
};

export default Tags;
