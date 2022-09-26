import React, { useState } from "react";
import { Container } from "./style";

const RatingCard = ({handleChange, handleSubmit, selectedRating}) => {
  return (
    <Container>
      <div className="circle">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div className="rating-inquiry">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label className="circle" htmlFor="1-star">
              1
              <input
                type="radio"
                name="ratings"
                value="1"
                id="1-star"
                checked={selectedRating === "1"}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label className="circle" htmlFor="2-star">
              2
              <input
                type="radio"
                name="ratings"
                value="2"
                id="2-star"
                checked={selectedRating === "2"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="circle" htmlFor="3-star">
              3
              <input
                type="radio"
                name="ratings"
                value="3"
                id="3-star"
                checked={selectedRating === "3"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="circle" htmlFor="4-star">
              4
              <input
                type="radio"
                name="ratings"
                value="4"
                id="4-star"
                checked={selectedRating === "4"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="circle" htmlFor="5-star">
              5
              <input
                type="radio"
                name="ratings"
                value="5"
                id="5-star"
                checked={selectedRating === "5"}
                onChange={handleChange}
              />
            </label>
          </div>
        </fieldset>
        <button className={selectedRating ? '' : 'disabled'} type="submit">SUBMIT</button>
      </form>
    </Container>
  );
};

export default RatingCard;
