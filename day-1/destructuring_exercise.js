const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
};

const getPersonInfo = (person) => {
  return `${person.firstName} ${person.lastName} lives in ${person.country}. 
  He is ${person.age} years old. 
  He is an ${person.job}. 
  He teaches ${person.skills} and he speaks ${person.languages}.`;
}
