import classes from "./projects.module.sass";
import { Container } from "@/components/Container";
import Link from "next/link";
import clx from "classnames";
import { merriweather } from "@/font/body";
import { TableOFContentPropsType } from "@/components/projects/type";
import { Typography } from "@/components/Typography";
import Image from "next/image";
import { Fragment } from "react";

const renderTableContent = (content: TableOFContentPropsType, index: number) => {
  if (Array.isArray(content.content)) {
    return <ul>{content?.content.map(renderTableContent)}</ul>;
  }

  return <li><Link href={content.target ?? "#"}>{content.content}</Link></li>;
};

export const Projects = () => {


  return <div>
    <Container>
      <h1 className={classes.block_title}>My Projects</h1>
      <div>
        <p className={classes.table_contents}>Table of Contents</p>
        <ul className={clx(classes.table_contents_list, merriweather.className)}>
          <li>
            <Link href={"#"}>
              GRADUATE PROJECTS
            </Link>
          </li>
          <ul>
            <li>
              <Link href={"#"}>
                Data Story: Discrimination in Canada and How it Has Changed since the COVID-19 Pandemic Began
              </Link>
            </li>
            <ul>
              <li>
                <Link href={"#"}>
                  Overview of Discrimination in Canada Analysis
                </Link>
              </li>
            </ul>
            <li>
              <Link href={"#"}>
                Calgary Transit Visualizations
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Miscellaneous Mini-Datathon Visualizations
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                US Green House Gas Trends and Progress
              </Link>
            </li>
          </ul>
          <li>
            <Link href={"#"}>
              EXTRACURRICULAR PROJECTS
            </Link>
          </li>
          <ul>
            <li>
              <Link href={"#"}>
                An Overview of Homelessness in Canada and Alberta
              </Link>
            </li>
          </ul>
          <li>
            <Link href={"#"}>
              UNDERGRADUATE PROJECTS
            </Link>
          </li>
          <ul>
            <li>
              <Link href={"#"}>
                An Overview of Homelessness in Canada and Alberta
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Canadian Earthquake Visualizations
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Book Data Web Scraping and Analysis
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Threatened Species Analysis
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </Container>
    {renderSections()}
  </div>;
};

const renderSections = () => sections.map((section, index) => <Fragment key={index}>
  <Container>
    <div className={classes.block__separator} />
    <h3 className={clx(classes.block_title, classes.block_no_decoration)}>
      {section.title}
    </h3>
    {section.description && <Typography className={classes.body}>
      {section.description}
    </Typography>}
  </Container>
  {
    section.projects.map((project, index) =>
      <article className={classes.project} key={index}>
        <header className={classes.project_header}>
          <h5 className={classes.project_header__heading}>{project.title}</h5>
        </header>
        <Container>
          {
            project.contents.map((content, index) =>
              <Fragment key={index}>
                <div className={classes.project_body} key={index}>
                  <div className={classes.project_body_text__container}>
                    <h6 className={classes.project_body_text__container_heading}>
                      {content?.title}
                    </h6>
                    <Typography>
                      {content.content}
                    </Typography>
                  </div>
                  <div className={classes.project_body_image__container}>
                    {
                      content?.images?.map((src, index) => <img src={src} alt={"image"} />)
                    }
                  </div>
                  {content.video_url && <div className={classes.project_body_video__container}>
                    <iframe src={content?.video_url} />
                  </div>}
                </div>
                {index !== (project.contents?.length - 1) && <div className={classes.block__separator} />}
              </Fragment>,
            )
          }
        </Container>
      </article>,
    )
  }
</Fragment>);

const sections = [
  {
    title: "GRADUATE PROJECTS",
    description: "The following projects were created as a part of my completion of the Masters of Data Science and Analytics program at the University of Calgary.",
    projects: [{
      title: "Data Visualization Projects",
      contents: [
        {
          title: "Data Story: Discrimination in Canada and How it Has Changed since the COVID-19 Pandemic Began",
          content: `The visualizations for this project are for a datastory, which you can read in full HERE. An overview of the project can be found in the video below.`,
          images: ["https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds", "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds"],
          video_url: "https://www.youtube.com/embed/dcXqhMqhZUo?si=TgYWNITbg4xaEBDW",
        }, {
          title: "Data Story: Discrimination in Canada and How it Has Changed since the COVID-19 Pandemic Began",
          content: `The visualizations for this project are for a datastory, which you can read in full HERE. An overview of the project can be found in the video below.`,
          images: ["https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds", "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds"],
        },
      ],
    }, {
      title: "Calgary Transit Visualizations",
      contents: [
        {
          title: "Data Story: Discrimination in Canada and How it Has Changed since the COVID-19 Pandemic Began",
          content: `With this project are descriptive visualizations I created for my Calgary Transit Visualization project. For the full analysis check out the report by clicking HERE. `,
          images: ["https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds", "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds"],
          // video_url: "https://www.youtube.com/embed/dcXqhMqhZUo?si=TgYWNITbg4xaEBDW",
        },
      ],
    }],
  }, {
    title: "EXTRACURRICULAR PROJECTS",
    description: "",
    projects: [{
      title: "Data by Design Datathon 2020",
      contents: [
        {
          title: "Data Story: Discrimination in Canada and How it Has Changed since the COVID-19 Pandemic Began",
          content: `The visualizations for this project are for a datastory, which you can read in full HERE. An overview of the project can be found in the video below.`,
          images: ["https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds", "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds"],
        },
      ],
    }],
  },
  {
    title: "UNDERGRADUATE PROJECTS",
    description: "The following projects were created as a part of a Data Analytics course during my Bachelor of Commerce at the University of Calgary.",
    projects: [{
      title: "Individual Projects",
      contents: [
        {
          title: "Canadian Earthquake Visualizations",
          content: `The earthquake visuals were made in Tableau. To see how I created the visualizations in the slideshow and more, watch the "How I Created my Visualizations" video below!`,
          images: ["https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds", "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=225&width=400&fit=bounds"],
        },
      ],
    }],
  },
];
