//Functions Practice

const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 7
      break;
    case 'Tuesday':
      return 8
      break;
    case 'Wednesday':
      return 6
      break;
    case 'Thursday':
      return 8
      break;
    case 'Friday':
      return 8
      break;
    case 'Saturday':
      return 8
      break;
    case 'Sunday':
      return 8
      break;
    default:
      return 'Error!'
  }
};

const getActualSleepHours = () =>
  getSleepHours('Monday') + 
  getSleepHours('Tuesday') + 
  getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + 
  getSleepHours('Friday') + 
  getSleepHours('Saturday') + 
  getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 9
  return idealHours * 7
};

const calculateSleepDebt = () => {
  const ActualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (ActualSleepHours === idealSleepHours) {
  console.log('The user got the perfect amount of sleep');
} else if (ActualSleepHours > idealSleepHours) {
  console.log('The user got more sleep than needed');
} else if (ActualSleepHours < idealSleepHours) {
  console.log('The user should get some more rest')
  }
};

calculateSleepDebt();
