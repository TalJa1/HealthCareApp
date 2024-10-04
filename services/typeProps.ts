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

export interface ListScreenDateProps {
  selectedDate: number;
  handleDateChange: (dayDate: number) => void;
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
  selectedMonth: string;
}

export interface ListScreenMainProps {
  selectedDate: number;
  selectedMonth: string;
  isChangeable: boolean;
  renderData: TaskProps[];
  setChange: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export interface TaskProps {
  title: string;
  description: string;
  img: any; // Use appropriate type if known, e.g., ImageSourcePropType for React Native
  isCompleted: boolean;
}

export interface CuztomizeMainProps {
  currentTask: TaskProps[];
  setCurrentTask: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  additionTask: TaskProps[];
  setAdditionTask: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  cancelTasks: number[];
  setCancelTasks: React.Dispatch<React.SetStateAction<number[]>>;
  moveTasks: number[];
  setMoveTasks: React.Dispatch<React.SetStateAction<number[]>>;
  selectedTab: 'current' | 'list';
  setSelectedTab: React.Dispatch<React.SetStateAction<'current' | 'list'>>;
}

export interface TabRenderListProps {
  data: TaskProps[];
  setCount: React.Dispatch<React.SetStateAction<number[]>>;
  count: number[];
}
