<template>
  <main class="about flex flex-col px-16 pb-16">
    <p class="about-small pb-10">About</p>
    <AcademicEducation />
    <ExperienceGallery :experienceList="experienceList" />
  </main>
</template>

<script lang="ts" setup>
import ExperienceGallery from "@/components/organisms/ExperienceGallery/ExperienceGallery.vue";
import { Experience } from "@/components/organisms/ExperienceItem/ExperienceItem.vue";
import AcademicEducation from "@/components/atoms/AcademicEducation/AcademicEducation.vue";

const experienceList: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "LienTech",
    period: "10/2022 - 07/2023",
    description:
      "Researcher working on an Artificial Intelligence engine development project capable of classifying and qualifying IT professionals (Recruiting).",
    tasks:
      "API creation, using Flask, Werkzeug, Docker, SQLAlchemy (ORM), PostgreSQL, Pytest; API communication with S3 Bucket for object storage; Development of a Recruitment Web platform using Vue, Jest and Docker; Unit Testing and Automated Pipeline Build in Azure Pipelines; Chatbot development using RASA Framework.",
    skills: [
      "Vue",
      "CSS",
      "HTML",
      "RASA",
      "Chatbots",
      "PostgreSQL",
      "ML",
      "IA",
      "Flask",
      "SQLAlchemy",
      "Pytest",
      "AWS S3",
      "Docker",
      "TypeScript",
      "Jest",
      "Git",
      "Git Flow",
      "Scrum",
      "Azure DevOps",
      "Python",
    ],
  },
  {
    role: "Trainee AI",
    company: "LAPISCO",
    period: "07/2022 - 11/2022",
    description:
      "I explored fundamental concepts of Artificial Intelligence, understanding how algorithms perform complex tasks previously exclusive to human intelligence.",
    tasks:
      "Applying classification algorithms like KNN, Decision Tree, Naive Bayes, MLP and SVM to various datasets allowed me to understand their practical applications and performance drivers. Challenges such as detecting heart disease provided hands-on experience in developing accurate machine learning models based on real data.",
    skills: [
      "Python",
      "Pandas",
      "Numpy",
      "Seaborn",
      "Matplotlib",
      "Scipy",
      "Scikit-learn",
      "Machine Learning Algorithms",
      "Exploratory Data Analysis",
      "Artificial Neural Networks",
      "Classification Algorithms",
    ],
  },
  {
    role: "Bank Apprentice",
    company: "Bank of Brazil S.A.",
    period: "08/2016 - 08/2018",
    description:
      "I worked in the administrative area, performing activities aimed at banking support and played a crucial role in the control and manipulation of data, ensuring the integrity of information.",
    tasks:
      "Careful treatment of various data, ensuring that they were in compliance with all established procedures and strictly complying with the stipulated deadlines, vital to guarantee the smooth flow of internal operations allowing the team to perform its tasks more effectively.",
    skills: [
      "Logical Mathematical Reasoning",
      "Statistical Data Analysis",
      "Technology and Qualification for Administrative Occupations",
    ],
  },
];
</script>

<style scoped>
.about-small {
  font-size: 120px;
  font-weight: 500;
  text-transform: uppercase;
  word-wrap: break-word;
  padding-bottom: 40px;
}

@media (max-width: 300px) {
  .about {
    padding-left: 10%;
    padding-right: 10%;
  }

  .about-small {
    font-size: 60px;
  }
}

@media (min-width: 301px) and (max-width: 387px) {
  .about {
    padding-left: 10%;
    padding-right: 10%;
  }

  .about-small {
    font-size: 70px;
  }
}

@media (min-width: 388px) and (max-width: 500px) {
  .about {
    padding-left: 10%;
    padding-right: 10%;
  }

  .about-small {
    font-size: 90px;
  }
}

@media (min-width: 501px) and (max-width: 520px) {
  .about-small {
    font-size: 90px;
  }
}
</style>
