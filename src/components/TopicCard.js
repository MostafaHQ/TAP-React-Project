import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  top: 30px;
  position: relative;
  border: 1px solid var(--lines-color);
  background-color: var(--fixed-white);
  color: var(--fixed-black);
  font-size: 12px;
  font-weight: var(--bold-font);
  @media (max-width: 1300px) {
    position: static;
    margin-bottom: 20px;
  }
`;

const CardImage = styled.img`
  width: 270px;
  height: 170px;
  @media (max-width: 1300) {
    width: 100%;
  }
`;

const TopicProperty = styled.p`
  padding: 10px;
`;

const Subject = styled.span`
  font-size: 14px;
`;

const Author = styled.span`
  color: var(--brand-primary);
  text-decoration: underline;
`;

const FavoriteRequest = styled.div`
  border: 1px solid var(--fixed-grey);
  padding: 15px;
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 18px;
  border: none;
  margin: 10px auto;
  background-color: var(--brand-secondary);
  color: var(--fixed-white);
  @media (max-width: 1300) {
    width: 100%;
  }
`;

const Credit = styled.p`
  color: var(--fixed-grey);
  text-align: center;
`;

export const TopicCard = (props) => {
  let imagePath = "";

  // Check if props and props.cardDetails are defined
  if (props && props.cardDetails && props.cardDetails.image) {
    // Assuming `props.cardDetails.image` contains a valid image filename
    // Make sure the path to the image file is correct relative to this component
    imagePath = require(`../../public/images/${props.cardDetails.image}`);
  }
  return (
    <>
      <CardContainer>
        <CardImage src={imagePath} alt={props.cardDetails.topic} />
        <TopicProperty>
          <Subject>{props.cardDetails.topic}</Subject> by
          <Author>{props.cardDetails.name}</Author>
        </TopicProperty>
        <FavoriteRequest>
          <p>Interested about this topic?</p>
          <FavoriteButton>Add to Favorites</FavoriteButton>
          <Credit>Unlimited Credits</Credit>
        </FavoriteRequest>
      </CardContainer>
    </>
  );
};
