import { graphql } from "gatsby";
import * as React from "react";
import { GrArticle } from "react-icons/gr";

// import AwesomeWebsites from "../components/homePage/awesomeWebsites";
import ButtonLink from "../components/buttonLink";
import GreetingCard from "../components/homePage/greeting";
import HeroImage from "../components/homePage/heroImage";
import IntroductionCard from "../components/homePage/introduction";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Posts from "../components/posts";
import Seo from "../components/seo";
import ProjectsSection from "./../components/portfolio/projectsSection";

const IndexPage: React.FC = ({ data }: any) => {
  const posts = data.allMdx.nodes.slice(0, 3);
  const projectsInfo = data.allMarkdownRemark.edges.slice(0, 3);

  return (
    <div className="relative">
      <Layout>
        <HeroImage />

        <Padding>
          <main>
            <section className="flex flex-col lg:flex-row gap-10 my-10 ">
              <GreetingCard />
              <IntroductionCard />
            </section>

            <section className="my-10 py-10 flex flex-col justify-center px-20 bg-[url('../images/bg-gradient-vertical.png')] sm:bg-[url('../images/bg-gradient.png')] bg-fixed bg-no-repeat bg-opacity-50 bg-center bg-blend-screen">
              <h2 className="mb-10 text-center">Latest Posts</h2>
              <Posts data={posts} />
              <div className="mx-auto w-64">
                <ButtonLink
                  href="/blog"
                  label="Explore All Posts "
                  iconAfter={<GrArticle color="#FFC700" />}
                />
              </div>
            </section>

            {/* <section className="h-64 flex justify-center m-auto">
                <AwesomeWebsites />
              </section> */}

            <section className="flex flex-col justify-center items-center">
              <h2>Portfolio</h2>
              <p className=" leading-9">
                As part of my professional endeavors, I enjoy engaging in
                various side projects that allow me to delve deeper into my
                interests in design and development. I would be glad to share
                some of my recent initiatives with you.
              </p>

              <ProjectsSection projectsInfo={projectsInfo} />
            </section>
          </main>
        </Padding>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;

export const postsQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          frontmatter {
            imgSrc {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            slug
            imgAlt
            service
          }
          id
        }
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;
