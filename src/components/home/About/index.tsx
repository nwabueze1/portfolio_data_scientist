import styles from "./about.module.sass";
import { Container } from "@/components/Container";
import { Typography } from "@/components/Typography";
import { aboutMeData } from "@/data/aboutme";
import { Accordion } from "@/components";
import clx from "classnames";
import { merriweather } from "@/font/body";

export const About = () => {
  const renderContent = () =>
    aboutMeData?.contents.map((content, index) => <Typography key={index}>{content}</Typography>);

  const renderWorkExperience = () =>
    aboutMeData.workexperience.map((we, index) => (
      <article className={styles.accordionbody} key={index}>
        <h3 className={clx(styles.accordionbody__title, merriweather.className)}>
          {we.company.role}, <span>{we.company.name}</span>
        </h3>
        <Typography className={styles.accordionbody__text}>{we.company.location}</Typography>
        <Typography className={styles.accordionbody__text}>{we.company.date}</Typography>
        <ul
          className={clx(
            styles.accordionbody__list,
            merriweather.className,
            styles.accordionbody__text,
          )}
        >
          {we.company.work.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </article>
    ));

  const renderSkills = () =>
    aboutMeData.skills.map((skill, index) => (
      <article key={index} className={styles.accordionbody}>
        <h3 className={clx(styles.accordionbody__title, merriweather.className)}>{skill.title}</h3>
        {skill.content && (
          <ul
            className={clx(
              styles.accordionbody__list,
              merriweather.className,
              styles.accordionbody__text,
            )}
          >
            {skill.content.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        )}
        {skill.tools && (
          <ul
            className={clx(
              styles.accordionbody__list,
              merriweather.className,
              styles.accordionbody__text,
            )}
            key={index}
          >
            {skill.tools.map((tool, index) => (
              <li key={index}>
                <span>{tool.title}:</span> {tool.content}
              </li>
            ))}
          </ul>
        )}
      </article>
    ));

  const renderEducationBackground = () =>
    aboutMeData.educationBackground.map((edbg, index) => (
      <article className={styles.accordionbody} key={index}>
        <h3 className={clx(styles.accordionbody__title, merriweather.className)}>
          {edbg.title.main} <span>{edbg.title.date}</span>
        </h3>

        <Typography className={styles.accordionbody__text}>{edbg.school.name}</Typography>
        <ul
          className={clx(
            styles.accordionbody__list,
            merriweather.className,
            styles.accordionbody__text,
          )}
        >
          {edbg.school.archievement.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
        <Typography className={clx(styles.accordionbody__text, styles.accordionbody__subtitle)}>
          {" "}
          Major Courses:
        </Typography>
        <Typography className={styles.accordionbody__text}>{edbg.major_courses}</Typography>
      </article>
    ));

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <img src={aboutMeData.passport_url} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.textContainer__heading}>{aboutMeData.title}</h2>
          {renderContent()}
        </div>
      </div>
      <div>
        <Accordion title={"Education"}>{renderEducationBackground()}</Accordion>
        <Accordion title={"Work Experience"}>{renderWorkExperience()}</Accordion>
        <Accordion title={"Skills Summary"}>{renderSkills()}</Accordion>
      </div>
    </Container>
  );
};
