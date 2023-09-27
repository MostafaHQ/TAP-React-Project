import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--body-text);
`;

const StyledCard = styled.div`
  border-radius: 3%;
  height: 100%;
  padding: 0;
  background-color: var(--bg_default);
  box-shadow: 0px 0px 15px -3px var(--lines-color);
`;

const Image = styled.img`
  height: 50%;
  width: 100%;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
  overflow: hidden;
`;

const CardInfoContainer = styled.div`
  padding: 12px;
  font-size: 14px;
`;

const Category = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Topic = styled.h2`
  font-size: 16px;
  font-weight: var(--bold-font);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
`;

const AuthorName = styled.p`
  font-size: 12px;
  margin-top: 15px;
`;

export const Card = (props) => {
  return (
    <>
      {props.details.map((value) => (
        <StyledLink to={"/details/${value.id}"} key={value.id}>
          <StyledCard>
            <CardInfoContainer>
              <Image src={value.image} alt={value.topic} />
              <Category>{value.category}</Category>
              <Topic>{value.topic}</Topic>
              <AuthorName>Author: {value.name}</AuthorName>
            </CardInfoContainer>
          </StyledCard>
        </StyledLink>
      ))}  
    </>
  );
};
