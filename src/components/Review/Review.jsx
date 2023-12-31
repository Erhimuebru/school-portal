import React, { useEffect, useState } from "react";
import { ReviewData } from "./ReviewData";
import ReviewDetailsCard from "./ReviewDetailsCard";
import { apiGet } from "../../utils/api/axios";

const Review = () => {

  // const [reviewsData, setReviewsData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await apiGet("/reviews");
        
  //       setReviewsData(data);
  //     } catch (error) {
        
  //     }
  //   };
  //   fetchData();
  // }, []);

  


  return (
    <div className="bg-[pink] pt-10 pb-10">
        <p className="text-center font-extrabold">Parent Testimonials</p>
      <h3 className="text-center text-3xl pb-10">
We make sure our parents get the best of their words</h3>

      <div className="swallow-card-container overflow-x-auto">
        <div className="flex flex-row rounded-sm ml-4 sm:ml-4">
          <div className="flex flex-row gap-5 lg:gap-20 lg:ml-14 mr-14 rounded-sm">
            {ReviewData ?.map((category) => (
              <ReviewDetailsCard
                key={category.id}
                id={category.id}
                name={category.name}
                comments={category.comments}
              />
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Review;


