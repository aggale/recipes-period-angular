export class Recipe {
  id: string;
  recipeName: string;
  description: string;
  extendedDescription: string;
  serves: number;
  time: string;
  difficulty: string;
  pic: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  show: boolean
}
