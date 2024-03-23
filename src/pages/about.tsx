import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdNextPlan } from "react-icons/md";
import Layout from "../components/layout";
import Padding from "../components/padding";
import Seo from "../components/seo";
import Toolkit from "../components/toolkit";
import { toolkit } from "../data/data";
import resume from "../data/resume.pdf";

const AboutPage = () => {
  const [page, setPage] = React.useState(1);

  return (
    <Layout pageTitle="About Me">
      <Padding>
        <main>
          <section className="flex ">
            <div className="w-2/3">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                laudantium harum eligendi repudiandae, sint illo, id ut odio
                repellat praesentium officiis doloremque accusantium blanditiis
                eum. Doloribus cupiditate nobis temporibus maiores!
              </p>
            </div>
            <StaticImage
              className="float-right m-5 w-1/2 size-fit rounded-full"
              alt="Gatsby Image"
              src="../images/aboutMe.jpg"
            />
          </section>

          <section className="text-center my-28">
            <h2 className="mb-10">Tech Skills</h2>
            <div className="flex  text-center flex-wrap justify-center">
              {toolkit.map((skillSet) => (
                <div key={skillSet.segment} className=" m-5">
                  <Toolkit skillSet={skillSet} />
                </div>
              ))}
            </div>
          </section>

          <section className="text-center flex flex-col">
            <h2>Resume</h2>

            <a
              className="btn btn-ghost mb-5"
              href={resume}
              download="Alireza-Keshavarz-Shirazi-CV"
            >
              <FaCloudDownloadAlt color="yellow" size={20} />
              download
            </a>
            <div>
              {page === 1 && (
                <StaticImage src="../data/cv-page-1.png" alt="Resume Image" />
              )}
              {page === 2 && (
                <StaticImage src="../data/cv-page-2.png" alt="Resume Image" />
              )}
            </div>

            <div className="flex gap-5 mx-auto">
              <button className=" btn-circle hover:-rotate-6">
                <MdNextPlan
                  color="yellow"
                  size={40}
                  style={{ transform: "scaleX(-1)" }}
                  onClick={() => {
                    setPage(1);
                  }}
                />
              </button>
              <button
                className=" btn-circle hover:rotate-6"
                onClick={() => {
                  setPage(2);
                }}
              >
                <MdNextPlan color="yellow" size={40} />
              </button>
            </div>
          </section>
        </main>
      </Padding>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About you" />;
