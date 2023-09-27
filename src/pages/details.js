import styled from "styled-components";
import { TopicCard } from "../components/TopicCard";

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
  return (
    <>
      <BlackContainer>
        <InnerContainer>
          <TopicDetails>
            <FullWidth>
              <TopicDesc>
                <CategoryName>Web Development Languages</CategoryName>
                <TopicName>HTML</TopicName>
                <LanguageDefinition>
                  HTML (Hypertext Markup Language) is the standard markup
                  language for creating web pages and other information that can
                  be displayed in a web browser. It provides a structure for
                  content and defines how it should be displayed on a web page,
                  including text, images, and multimedia. HTML is essential for
                  creating static web pages and is a foundational technology for
                  the World Wide Web.
                </LanguageDefinition>
              </TopicDesc>
            </FullWidth>
            <FullWidth>
              <TopicCard />
            </FullWidth>
          </TopicDetails>
        </InnerContainer>
      </BlackContainer>
      <InnerContainer>
        <FullWidth>
          <TopicContainer>
            <CourseTopic>
              <h3>HTML Sub Topics</h3>
              <ul>
                <SubTopics>HTML syntax and structure</SubTopics>
                <SubTopics>HTML elements and attributes</SubTopics>
                <SubTopics>HTML forms and input elements</SubTopics>
              </ul>
            </CourseTopic>
          </TopicContainer>
        </FullWidth>
      </InnerContainer>
    </>
  );
};
