export interface Project {
  name: string;
  technology: string;
  summary: string;
  cover: string;
  details?: ProjectDetail[];
}

export interface ProjectDetail {
  image: string;
  description?: string;
}
