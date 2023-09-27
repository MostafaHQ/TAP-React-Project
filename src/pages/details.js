import styled from "styled-components";
import { TopicCard } from "../components/TopicCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadDetails } from "../shared/Api";

const BlackContainer = styled.div`
  background-color: var(--fixed-black);
  color: var(--fixed-white);
  width: 100vw;
  margin-top: 20px;
`;
const InnerContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const TopicDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const TopicDesc = styled.div`
  padding: 20px;
  width: 60%;
`;

const CategoryName = styled.p`
  color: var(--brand-secondary);
`;

const TopicName = styled.h2`
  font-size: 25px;
`;

const LanguageDefinition = styled.p`
  margin-top: 20px;
  font-size: 15px;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
`;

const TopicContainer = styled.div`
  border-radius: 2%;
  margin-top: 20px;
`;

const SupTopicTitle = styled.h3``;

const CourseTopic = styled.div`
  width: 60%;
  border: 1px solid var(--lines-color);
  background-color: var(--bg_default);
  color: var(--body-text);
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 1px;
  text-align: left;
`;

const SubTopics = styled.li`
  list-style-type: none;
  border-top: 1px solid var(--lines-color);
  padding: 10px;
`;

const FullWidth = styled.div`
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const Detail = () => {
  const { topicId } = useParams();
  const [topicDetails, setTopicDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadDetails(topicId).then((data) => {
      setTopicDetails(data);
      
    });
  }, []);

  return (
    <>
      <BlackContainer>
        <InnerContainer>
          <TopicDetails>
            <FullWidth>
              <TopicDesc>
                <CategoryName>{topicDetails.category}</CategoryName>
                <TopicName>{topicDetails.topic}</TopicName>
                <LanguageDefinition>
                  {topicDetails.description}
                </LanguageDefinition>
              </TopicDesc>
            </FullWidth>
            <FullWidth>
              <TopicCard cardDetails={topicDetails} />
            </FullWidth>
          </TopicDetails>
        </InnerContainer>
      </BlackContainer>
      <InnerContainer>
        <FullWidth>
          <TopicContainer>
            <CourseTopic>
              <h3>{topicDetails.topic} Sub Topics</h3>
              <ul>
                {topicDetails.subtopics}
              </ul>
            </CourseTopic>
          </TopicContainer>
        </FullWidth>
      </InnerContainer>
    </>
  );
};
