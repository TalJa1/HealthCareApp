export interface Exercise {
  title: string;
  img: any;
  subTitle: string;
  description: string;
}

export interface Food {
  title: string;
  subTitle: string;
  value: string;
  img: any;
  description: string;
}

export interface LearnMoreData {
  disease: string;
  img: any;
  description: string;
  thingsToDo: string;
  thingsNotToDo: string;
  excercise: Exercise[];
  foodsToEat: Food[];
}

export interface LearnMoreComponentProps {
  index: number;
  label: string;
  img: any;
  description: string;
}
