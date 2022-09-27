import React from "react";
import {
  Container,
  Button,
  Circle,
  Fieldset,
  Heading,
  Input,
  Lead,
  Hgroup,
} from "./style";

export function RatingCard({ setRating }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setRating(formData.get("rating"));
  };
  return (
    <Container>
      <Circle>
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </Circle>
      <Hgroup>
        <Heading>How did we do?</Heading>
        <Lead>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Lead>
      </Hgroup>
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <div>
            <Input required type="radio" name="rating" value="1" id="1-star" />
            <Circle as="label" htmlFor="1-star">
              1
            </Circle>
          </div>
          <div>
            <Input required type="radio" name="rating" value="2" id="2-star" />
            <Circle as="label" htmlFor="2-star">
              2
            </Circle>
          </div>
          <div>
            <Input required type="radio" name="rating" value="3" id="3-star" />
            <Circle as="label" htmlFor="3-star">
              3
            </Circle>
          </div>
          <div>
            <Input required type="radio" name="rating" value="4" id="4-star" />
            <Circle as="label" htmlFor="4-star">
              4
            </Circle>
          </div>
          <div>
            <Input required type="radio" name="rating" value="5" id="5-star" />
            <Circle as="label" htmlFor="5-star">
              5
            </Circle>
          </div>
        </Fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}
