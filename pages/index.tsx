import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";

const HeroSection: React.FC = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  h1 {
    font-family: times;
    font-size: 5rem;
    margin-top: 0;
    font-weight: 400;
    line-height: 120%;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
  }
  article {
    width: 80%;
  }

  @media (max-width: 946px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const WorkSection: React.FC = styled.article`
  margin-bottom: 10rem;
  h2 {
    margin: 0;
  }
  h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: 500;
  }
  header {
    padding: 2rem 0;
    display: flex;
    flex: 0.3;
    min-width: 100%;
    flex-direction: row;
    align-items: center;
  }
  i {
    margin-left: 1rem;
    height: 40px;
    width: 40px;
    border-radius: 100px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .details span {
    color: #666;
    font-size: 0.9rem;
  }
  ul {
    all: unset;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    flex-wrap: wrap;
    h3 {
      margin: 0;
    }
    li:nth-child(even) {
      transform: translateY(3rem);
    }
    img {
      all: unset;
      transition: transform 0.5s;
      object-fit: cover;
      background: #1f1d20;
      width: 100%;
      height: 550px;
      opacity: 0.6;
      &:hover {
        transform: scale(1.03, 1.03);
        opacity: 1;
      }
    }
  }

  @media (max-width: 946px) {
    ul {
      grid-template-columns: 1fr;
      li:nth-child(even) {
        transform: translateY(0);
      }
    }
  }
`;

const BlogSection: React.FC = styled.article`
  margin-bottom: 10rem;
  header {
    padding: 2rem 0;
    display: flex;
    flex: 0.3;
    min-width: 100%;
    flex-direction: row;
    align-items: center;
  }
  h2 {
    flex: 2;
    margin: 0;
  }
  h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: 500;
  }
  a {
    text-align: right;
    i {
      padding-left: 0.5rem;
    }
    flex: 1;

    color: #fff;
    text-decoration: none;
  }
  ul {
    all: unset;
    list-style: none;
    display: flex;
    gap: 4rem;
    li {
      flex: 1 0 47%;
      max-width: 47%;
    }
    h3 {
      margin: 0;
    }

    img {
      background: red;
      object-fit: cover;
      width: 100%;
      height: 300px;
      transition: transform 0.5s;
      opacity: 0.6;
      &:hover {
        transform: scale(1.03, 1.03);
        opacity: 1;
      }
    }
  }

  @media (max-width: 946px) {
    ul {
      overflow-x: auto;
      li {
        min-width: 67%;
      }
    }
  }
`;

const Index: React.FC = () => {
  return (
    <>
      <HeroSection>
        <article>
          <h1>Newcastle based multidisciplinary designer.</h1>
          <p>
            Specialising in small businesses and communicating their stories
          </p>
        </article>
      </HeroSection>
      <WorkSection>
        <header>
          <h2>Selecton of my work</h2>
          <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
        </header>
        <ul>
          {[
            {
              url: "/images/project1.jpg",
              title: "CrossFit Death or Glory",
              detail: "WEB | VIDEO | PHOTO",
            },
            {
              url: "/images/project2.jpg",
              title: "HappieLifts",
              detail: "WEB | BRANDING",
            },
            {
              url: "/images/project3.png",
              title: "Mono Productions",
              detail: "WEB | BRANDING | PRODUCT DESIGN | PHOTOGRAPHY",
            },
            {
              url: "/images/project4.png",
              title: "UGD",
              detail: "VIDEO",
            },
          ].map(({ url, title, detail }) => (
            <li>
              <img src={url} />
              <section className="details">
                <h3>{title}</h3>
                <span>{detail}</span>
              </section>
            </li>
          ))}
        </ul>
      </WorkSection>

      <BlogSection>
        <header>
          <h2>Thoughts &amp; Experiments</h2>
          <a href="/blog">
            View more
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </header>
        <ul>
          {[{ url: "/images/project2.jpg" }].map((item) => (
            <li>
              <img src={item.url} />
              <h3>New website</h3>
            </li>
          ))}
        </ul>
      </BlogSection>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default Index;
