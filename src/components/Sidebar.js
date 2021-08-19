import React, { useContext } from "react";
import { Image } from "react-bootstrap";

import { SelectionContext } from "../context/SelectionContext";

const skills = [
  {
    id: "Frontend",
    title: "Frontend",
    skills: [
      {
        id: "reactjs",
        label: "ReactJS",
        show: true,
      },
      {
        id: "VueJS",
        label: "VueJS",
        show: false,
      },
    ],
    show: true,
  },
  {
    id: "mobile-frontend",
    title: "Mobile Frontend",
    skills: [
      {
        id: "swift",
        label: "Swift (for iOS)",
        show: true,
      },
      {
        id: "kotlin",
        label: "Kotlin (for Android)",
        show: false,
      },
      {
        id: "react-native",
        label: "React Native",
        show: false,
      },
    ],
    show: true,
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        id: "php-laravel",
        label: "PHP Laravel",
        show: true,
      },
      {
        id: "php-codeigniter",
        label: "PHP Codeigniter",
        show: true,
      },
      {
        id: "python-django",
        label: "Python Django",
        show: true,
      },
      {
        id: "expressjs",
        label: "ExpressJS",
        show: true,
      },
      {
        id: "serverless-js",
        label: "Serverless JS",
        show: false,
      },
      {
        id: "serverless-python",
        label: "Serverless Python",
        show: false,
      },
    ],
    show: true,
  },
  {
    id: "blockchain",
    title: "Blockchain",
    skills: [
      {
        id: "solidity",
        label: "Solidity",
        show: true,
      },
      {
        id: "hedera",
        label: "Hedera Hashgraph",
        show: true,
      },
      {
        id: "centrality",
        label: "Centrality",
        show: true,
      },
    ],
    show: true,
  },
  {
    id: "database",
    title: "Database",
    skills: [
      {
        id: "mysql",
        label: "MySQL",
        show: true,
      },
      {
        id: "sqlite",
        label: "SQLite",
        show: true,
      },
      {
        id: "mongodb",
        label: "MongoDB",
        show: true,
      },
    ],
    show: true,
  },
  {
    id: "data-science",
    title: "Data Science",
    skills: [
      {
        id: "jupyter-notebool",
        label: "Jupyter Notebook",
        show: true,
      },
      {
        id: "Scikit-learn",
        label: "Scikit-learn",
        show: true,
      },
      {
        id: "Pandas",
        label: "Pandas",
        show: true,
      },
    ],
    show: false,
  },
];

export const DesktopSidebar = () => {
  const { selectedSkills, setSelectedSkills } = useContext(SelectionContext);

  return (
    <div id="sidebar">
      <div style={{ textAlign: "center" }}>
        <Image
          src="images/jit.png"
          roundedCircle
          fluid
          style={{ maxWidth: "200px" }}
        />
      </div>

      {skills
        .filter((skill) => skill.show)
        .map((showSkill) => {
          return (
            <React.Fragment key={showSkill.id}>
              <div className="skill-title">{showSkill.title}</div>
              <ul>
                {showSkill.skills
                  .filter((item) => item.show)
                  .map((showItem) => {
                    return (
                      <li key={showItem.id}>
                        <span
                          className={`skillItem ${
                            selectedSkills.includes(showItem.id) ? "active" : ""
                          }`}
                          onClick={() => {
                            if (selectedSkills.includes(showItem.id)) {
                              const newArr = selectedSkills.filter(
                                (item) => item !== showItem.id
                              );
                              setSelectedSkills(newArr);
                            } else {
                              setSelectedSkills([
                                ...selectedSkills,
                                showItem.id,
                              ]);
                            }
                          }}
                        >
                          {showItem.label}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export const MobileBar = () => {
  const { selectedSkills, setSelectedSkills } = useContext(SelectionContext);
  return (
    <div id="mobile-bar">
      {skills
        .filter((skill) => skill.show)
        .map((showSkill) => {
          return (
            <React.Fragment key={showSkill.id}>
              <span
                className="skill-title"
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                {showSkill.title}
              </span>
              {showSkill.skills
                .filter((item) => item.show)
                .map((showItem) => {
                  return (
                    <span
                      key={showItem.id}
                      className={`skillItem ${
                        selectedSkills.includes(showItem.id) ? "active" : ""
                      }`}
                      onClick={() => {
                        if (selectedSkills.includes(showItem.id)) {
                          const newArr = selectedSkills.filter(
                            (item) => item !== showItem.id
                          );
                          setSelectedSkills(newArr);
                        } else {
                          setSelectedSkills([...selectedSkills, showItem.id]);
                        }
                      }}
                    >
                      {showItem.label}
                    </span>
                  );
                })}{" "}
            </React.Fragment>
          );
        })}
    </div>
  );
};
