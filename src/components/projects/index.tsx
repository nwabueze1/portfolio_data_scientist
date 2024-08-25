import classes from "./projects.module.sass";
import { Container } from "@/components/Container";
import Link from "next/link";
import clx from "classnames";
import { merriweather } from "@/font/body";
import { TableOFContentPropsType } from "@/components/projects/type";
import { Typography } from "@/components/Typography";
import { FC, Fragment } from "react";
import { Images } from "@/components/projects/images";
import { projectsData } from "@/data/projects";

const renderTableContent = (content: TableOFContentPropsType, index: number) => {
  if (Array.isArray(content.content)) {
    return <ul>{content?.content.map(renderTableContent)}</ul>;
  }

  return (
    <li>
      <Link href={content.target ?? "#"}>{content.content}</Link>
    </li>
  );
};

const renderHeading = () =>
  projectsData.map((section, index) => (
    <Fragment key={index}>
      <li>
        <Link href={`#${section.title}`}>{section.title}</Link>
      </li>
      {section.projects.length > 0 && (
        <ul>
          {section.projects.map((project, idx) => (
            <Fragment key={idx}>
              <li key={idx}>
                <Link href={`#${project.title}`}>{project.title}</Link>
              </li>
              {project.contents &&
                project.contents.map(
                  (content, index) =>
                    content?.video && (
                      <ul key={index}>
                        <li>
                          <Link href={`#${content.video.title}`}>{content.video.title}</Link>
                        </li>
                      </ul>
                    ),
                )}
            </Fragment>
          ))}
        </ul>
      )}
    </Fragment>
  ));

export const Projects = () => {
  const renderSections = () =>
    projectsData.map((section, index) => <Section section={section as any} key={index} />);

  return (
    <div>
      <Container>
        <h1 className={classes.block_title}>My Projects</h1>
        <div>
          <p className={classes.table_contents}>Table of Contents</p>
          <ul className={clx(classes.table_contents_list, merriweather.className)}>
            {renderHeading()}
          </ul>
        </div>
      </Container>
      {renderSections()}
    </div>
  );
};


type SectionProps = {
  section: {
    title: string;
    description: string;
    projects: {
      title: string;
      contents: (
        | {
        title: string;
        content: string;
        images: string[];
        video_url: string;
        video: {
          title: string;
          url: string;
        };
      }
        | {
        title: string;
        content: string;
        images: string[];
        video_url?: undefined;
        video?: undefined;
      }
        )[];
    }[];
  };
};

const Section: FC<SectionProps> = ({ section }) => {
  return (
    <div>
      <Container>
        <div className={classes.block__separator} />
        <h3 className={clx(classes.block_title, classes.block_no_decoration)} id={section.title}>
          {section.title}
        </h3>
        {section.description && (
          <Typography className={classes.body} id={section.description}>
            {section.description}
          </Typography>
        )}
      </Container>
      {section.projects.map((project, index) => (
        <article className={classes.project} key={index}>
          <header className={classes.project_header}>
            <h5 className={classes.project_header__heading} id={project.title}>
              {project.title}
            </h5>
          </header>
          <Container>
            {project.contents.map((content, index) => (
              <Fragment key={index}>
                <div className={classes.project_body} key={index}>
                  <div className={classes.project_body_text__container}>
                    <h6 className={classes.project_body_text__container_heading} id={content.title}>
                      {content?.title}
                    </h6>
                    <Typography id={content.content}>{content.content}</Typography>
                  </div>
                  <div className={classes.project_body_image__container}>
                    {content.images && <Images images={content.images} />}
                  </div>
                  {content.video && (
                    <div className={classes.project_body_video__container}>
                      {content.video.title && <Typography className={classes.project_body_video__title}
                                                          id={content.video.title}>{content.video.title}</Typography>}
                      {content.video.url && <iframe src={content?.video.url} />}
                    </div>
                  )}
                </div>
                {index !== project.contents?.length - 1 && (
                  <div className={classes.block__separator} />
                )}
              </Fragment>
            ))}
          </Container>
        </article>
      ))}
    </div>
  );
};

