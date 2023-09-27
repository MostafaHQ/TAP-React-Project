import styled from "styled-components";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { loadTopics } from "../shared/Api";
import { InputWithIcon } from "../components/InputWithIcon";
import { Dropdown } from "../components/Dropdown";

const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin: 0 auto;
  border-radius: 7px;
  background-color: var(--lines-color);
  position: relative;
  top: 20px;
  box-shadow: 0px 0px 15px -3px var(--lines-color);
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SearchCriteria = styled.div`
  display: flex;
  width: 25%;
  gap: 1px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 7px 7px;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  color: var(--body-text);
  transform: translateY(-50%);
  pointer-events: none;
  @media (max-width: 768px) {
    top: 18%;
  }
`;

const StyledSection = styled.section`
  background-color: var(--bg_body);
  margin-top: 25px;
`;

const AllCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Counter = styled.p`
  color: var(--body-text);
  font-weight: var(--bold-font);
  font-size: 26px;
  margin: 0 auto;
  margin-top: 35px;
`;

export const Home = () => {
  const [topics, setTopics] = useState([]);
  const [viewTopics, setViewTopics] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [filterBy, setFilterBy] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setLoading(true);

    loadTopics(search)
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => {
        console.error("Error loading topics", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (topics) {
      let categories = new Set();

      topics.forEach((topic) => categories.add(topic.category));
      setFilterOptions([...categories]);

      let updatedTopics = [...topics];

      if (sortBy) {
        updatedTopics.sort((a, b) => {
          switch (sortBy) {
            case "name":
              return a["name"] < b["name"] ? -1 : 1;

            case "topic":
              return a["topic"] < b["topic"] ? -1 : 1;

            default:
              throw "Unknown sort by option ${sortBy}";
          }
        });
      }
      if (filterBy) {
        updatedTopics = updatedTopics.filter(
          (topic) => topic.category === filterBy
        );
      }
      setViewTopics(updatedTopics);
      console.log(filterBy);
    }
  }, [topics, sortBy, filterBy]);

  return (
    <>
      <StyledSection>
        <Container>
          <StyledSearchContainer>
            <SearchIcon>
              <ion-icon name="search-outline"></ion-icon>
            </SearchIcon>
            <InputWithIcon
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <SearchCriteria>
              <Dropdown
                label="Sort By"
                value={sortBy}
                options={[
                  { title: "Default", value: "" },
                  { title: "Author Name", value: "name" },
                  { title: "Title Topic", value: "topic" },
                ]}
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              />
              <Dropdown
                label="Filter By"
                value={filterBy}
                options={[
                  { title: "Default", value: "" },
                  ...filterOptions?.map((category) => ({
                    title: category,
                  })),
                ]}
                onChange={(e) => {
                  setFilterBy(e.target.value);
                }}
              />
            </SearchCriteria>
          </StyledSearchContainer>
          <Counter>"24"Web Topic Found </Counter>
          <AllCards>
            <Card details={viewTopics} />
          </AllCards>
        </Container>
      </StyledSection>
    </>
  );
};
