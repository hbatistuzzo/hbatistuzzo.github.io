// --------------------------------------- Project List
export const ProjectList = [
  {
    img: "/vgos.gif",
    title: "Rossby waves in Absolute Dynamic Topography data",
    description:
      "I've used CMEMS altimetry data to create functions that plot global monthly climatologies of zonal and meridional geostrophic velocities. The absolute dynamic topography variable was used to construct hovmöller diagrams in latitudes with strong signals in the low-frequency energy spectrum, thus allowing the visualization of 1st mode baroclinic Rossby waves.",
    // tech_stack: ["React", "Firebase"],
    tech_stack: ["Python", "Pandas", "Xarray", "Dask"],
    github_url: "https://github.com/hbatistuzzo/CMEMS-altimetry",
    demo_url: "https://www.youtube.com/@henriquebatistuzzo6833/videos",
  },
  {
    img: "/mf.gif",
    title: "[PORTUGUESE] Visualizações com PowerBI",
    description:
      "Este repositório compila uma série de projetos didáticos realizados durante a primeira metade do curso 'Microsoft Power BI Business Intelligence e Data Science' da Data Science Academy (72 horas de conteúdo, nível intermediário); esta primeira metade é focada em funcionalidades do Power BI, como: Ferramentas de visualização, Linguagem M para processos de ETL, Linguagem DAX para criação de medidas, estatísticas e parâmetros auxiliares, Manipulação de dados com Power Query, Funcionalidades nativas e externas e.g. Bravo e DAX Studio.",
    tech_stack: ["PowerBI", "DAX"],
    github_url: "https://github.com/hbatistuzzo/Projetos_PowerBI_parte1",
    demo_url: "",
  },
  {
    img: "/forecasting.gif",
    title: "[PORTUGUESE] PowerBI Avançado",
    description:
      "Este repositório estrutura o conteúdo da segunda metade do curso 'Business Intelligence e Data Science' da Data Science Academy (~ 72horas de duração, nível intermediário) e possui como foco: A integração do Power BI com Bancos de dados, o uso de SQL Analytics neste contexto, aplicação de técnicas de Machine Learning para segmentação e detecção de anomalias, com o auxílio de linguagens Python e R, o uso de Inteligência Artificial para análise de séries temporais no Power BI, e um estudo de caso. A oportunidade é fortuita para o aprendizado de algumas aplicações acessórias como ODBC e SQLite.",
    tech_stack: ["PowerBI", "DAX", "Python", "R", "SQL", "IA"],
    github_url: "https://github.com/hbatistuzzo/Projetos_PowerBI_parte2",
    demo_url: "",
  },
  {
    img: "/dovidio.png",
    title: "PHYSAT: Honours' Thesis Project",
    description:
      "Codes used in my honours' thesis '1st mode baroclinic Rossby waves modify the composition of Phytoplancton Functional Groups'. Altimetry data is used in tandem with a bioalgorithm that classifies phytoplankton groups based on their spectral signature",
    tech_stack: ["HTML", "CSS", "NodeJs", "MongoDB", "SocketIo"],
    github_url: "https://github.com/hbatistuzzo/PHYSAT_data",
    demo_url: "",
  },
  {
    img: "/db.png",
    title: "Ironhack Final Project: Viz, SQL queries, Predictive Model",
    description:
      "This project came from the fintech AME-Digital's case for Data Engineers based on Stack Overflow's 2018 Dev Survey. Case specific goals: answering questions regarding average salary of respondents, where they are from, what technologies and communication tools they use etc.",
    tech_stack: ["Python", "Pandas", "MySQL", "Tableau"],
    github_url: "https://github.com/hbatistuzzo/Ironhack-FinalProject",
    demo_url: "",
  },
  {
    img: "/heatmap.png",
    title: "Linear Regression Model",
    description:
      "A didactic machine learning project. One must predict the price of the diamonds in rick_diamonds.csv using the information from diamonds.csv through a linear regression model.",
    tech_stack: ["Python", "Pandas"],
    github_url: "https://github.com/hbatistuzzo/Diamonds_regression",
    demo_url: "",
  },
];

// --------------------------------------- Skills

// export const stackList = [
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
//     name: "React",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
//     name: "JavaScript",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
//     name: "Kubernetes",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg",
//     name: "Apache Airflow",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     name: "Python",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
//     name: "Pandas",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
//     name: "Numpy",
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
//     name: "SciPy",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
//     name: "Jupyter",
//   },
//   {
//     img: "https://docs.dask.org/en/stable/_images/dask_icon.svg",
//     name: "Dask",
//   },
//   {
//     img: "https://raw.githubusercontent.com/pydata/xarray/026aa7c073d03fb6d749c216be1d829816583fac/doc/_static/logos/Xarray_Icon_Final.svg",
//     name: "Xarray",
//   },
//   {
//     img: "https://landscape.lfenergy.org/logos/netcdf-c.svg",
//     name: "netCDF",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
//     name: "MATLAB",
//   },
//   {
//     img: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg",
//     name: "Power BI",
//   },
//   {
//     img: "https://raw.githubusercontent.com/simple-icons/simple-icons/50b3ccf2dfbfdc67eed3fbbb6031815ae3c26a19/icons/tableau.svg",
//     name: "Tableau",
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
//     name: "Matplotlib",
//   },
//   {
//     img: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
//     name: "Seaborn",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//     name: "PostgreSQL",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//     name: "MySQL",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     name: "MongoDB",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
//     name: "SQLAlchemy",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     name: "Docker",
//   },
//   {
//     img: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
//     name: "Selenium",
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg",
//     name: "Ubuntu",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
//     name: "Bash",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//     name: "Git",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
//     name: "Arduino",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//     name: "VS Code",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg",
//     name: "LaTeX",
//   },
//   {
//     img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
//     name: "FastAPI",
//   },
//   {
//     img: "https://www.svgrepo.com/show/354202/postman-icon.svg",
//     name: "Postman",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
//     name: "Flask",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
//     name: "Redis",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
//     name: "SQLite",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
//     name: "R",
//   },
//   {
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
//     name: "C",
//   },
//   {
//     img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
//     name: "HTML",
//   },
//   {
//     img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
//     name: "CSS",
//   }
// ];

export const techStack = [
  {
    category: "Currently Learning",
    technologies: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        name: "React",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        name: "JavaScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        name: "Kubernetes",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg",
        name: "Apache Airflow",
      },
    ],
  },
  {
    category: "Programming & Data Processing",
    technologies: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
        name: "Python",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        name: "Pandas",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
        name: "NumPy",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
        name: "SciPy",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        name: "Jupyter",
      },
      {
        img: "https://raw.githubusercontent.com/pydata/xarray/026aa7c073d03fb6d749c216be1d829816583fac/doc/_static/logos/Xarray_Icon_Final.svg",
        name: "Xarray",
      },
      {
        img: "https://landscape.lfenergy.org/logos/netcdf-c.svg",
        name: "NetCDF",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        name: "MATLAB",
      },
    ],
  },
  {
    category: "Visualization & Business Intelligence",
    technologies: [
      {
        img: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg",
        name: "Power BI",
      },
      {
        img: "https://raw.githubusercontent.com/simple-icons/simple-icons/50b3ccf2dfbfdc67eed3fbbb6031815ae3c26a19/icons/tableau.svg",
        name: "Tableau",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
        name: "Matplotlib",
      },
      {
        img: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg",
        name: "Seaborn",
      },
    ],
  },
  {
    category: "Databases",
    technologies: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        name: "PostgreSQL",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
        name: "SQLAlchemy",
      },
    ],
  },
  {
    category: "Data Engineering & Automation",
    technologies: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        name: "Docker",
      },
      {
        img: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
        name: "Selenium",
      },
    ],
  },
  {
    category: "Systems & Development Tools",
    technologies: [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg",
        name: "Ubuntu",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        name: "Bash",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        name: "Git",
      },
    ],
  },
  {
    category: "Miscellaneous",
    technologies: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        name: "Arduino",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        name: "VS Code",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg",
        name: "LaTeX",
      },
    ],
  },
  {
    category: "API's",
    technologies: [
      {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
        name: "FastAPI",
      },
      {
        img: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        name: "Postman",
      },
    ],
  },
  {
    category: "Some Experience with...",
    technologies: [
      {
        img: "https://docs.dask.org/en/stable/_images/dask_icon.svg",
        name: "Dask",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        name: "Flask",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        name: "Redis",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        name: "SQLite",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        name: "R",
      },
      {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        name: "HTML",
      },
      {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        name: "CSS",
      },
    ],
  },
];


