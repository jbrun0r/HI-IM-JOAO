import axios from "axios";
import { Project, Experience, AcademicEducation } from "@/shared/types";

export async function fetchHomeInfo(): Promise<{
  greeting: string;
  name: string;
  description: Array<string>;
  projects: Array<Array<Project>>;
  skills: string;
}> {
  const url = "https://jbrun0r.github.io/HI-IM-JOAO-API/home.json";
  try {
    return (await axios.get(url)).data;
  } catch (error) {
    console.error("Error fetching Home Info:", error);
    throw error;
  }
}

export async function fetchAboutInfo(): Promise<{
  experiences: Array<Experience>;
  academicEducation: AcademicEducation;
}> {
  const url = "https://jbrun0r.github.io/HI-IM-JOAO-API/about.json";
  try {
    return (await axios.get(url)).data;
  } catch (error) {
    console.error("Error fetching About Info:", error);
    throw error;
  }
}
