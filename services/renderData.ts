export const DiseaseCategoriesTabs = [
  {
    img: require('../assets/home/stomach.png'),
    label: 'Stomach',
  },
  {
    img: require('../assets/home/heart.png'),
    label: 'Heart',
  },
  {
    img: require('../assets/home/brain.png'),
    label: 'Brain',
  },
  {
    img: require('../assets/home/earsGroup.png'),
    label: 'Ears, nose, throat',
  },
  {
    img: require('../assets/home/lungs.png'),
    label: 'Lungs',
  },
  {
    img: require('../assets/home/arm.png'),
    label: 'Arms',
  },
];

export const HomeLearnMoreData = [
  {
    disease: 'Irritable Bowel Syndrome (IBS)',
    img: require('../assets/home/stomach.png'),
    description:
      'Irritable Bowel Syndrome is a gastrointestinal disorder that causes abdominal pain, bloating, and changes in bowel habits, such as diarrhea or constipation. It impacts the function of the digestive system without causing structural damage.',
    thingsToDo:
      'Eat small, frequent meals, follow a low-FODMAP diet, and manage stress levels.',
    thingsNotToDo: 'Consume fatty, fried foods, overeat, or neglect hydration.',
    excercise: [
      {
        title: 'Walking',
        img: require('../assets/home/excercise/walking.png'),
        subTitle: '20–30 minutes daily at a moderate pace.',
        description:
          'Walking stimulates the digestive system, improves bowel regularity, and reduces stress, which is a major trigger for IBS symptoms',
      },
      {
        title: 'Yoga',
        img: require('../assets/home/excercise/yoga.png'),
        subTitle: '20–30 minutes daily',
        description:
          'Yoga helps reduce stress and tension in the body, which can worsen IBS symptoms. It also promotes gentle movement of the intestines, easing bloating and discomfort.',
      },
      {
        title: 'Deep Breathing Exercises',
        img: require('../assets/home/excercise/deepBreathing.png'),
        subTitle: '5–10 minutes daily',
        description:
          'Deep breathing reduces stress, calms the nervous system, and alleviates IBS symptoms by improving oxygen flow to the digestive tract. It promotes relaxation and reduces tension in the abdomen',
      },
    ],
    foodsToEat: [
      {
        title: 'Low-FODMAP Fruits',
        subTitle: '1–2 servings daily',
        value: 'Rich in fiber, antioxidants, and vitamins C and B6.',
        img: require('../assets/home/food/fruit.png'),
        description:
          'Low-FODMAP fruits help reduce bloating and gas while providing essential nutrients for gut health. They are easily digestible and reduce IBS symptoms.',
      },
      {
        title: 'Oats',
        subTitle: '1/2–1 cup daily',
        value: 'High in soluble fiber (beta-glucan), protein, and magnesium',
        img: require('../assets/home/food/oats.png'),
        description:
          'Oats are gentle on the digestive system and help regulate bowel movements, reduce inflammation, and improve digestion by balancing gut bacteria',
      },
      {
        title: 'Lean Proteins (Chicken, Fish)',
        subTitle: '100–150g/meal, 2–3 times/day',
        value: 'High in protein and low in fat',
        img: require('../assets/home/food/meat.png'),
        description:
          'Lean proteins are easily digestible and help prevent IBS flare-ups. They provide essential amino acids for tissue repair and support gut health without causing irritation',
      },
    ],
  },
];
