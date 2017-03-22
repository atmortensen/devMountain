var user = {
  name: 'Alex Mortensen',
  location: 'Provo, UT',
  occupations: ['Retail at Sprint', 'Technician at System Tech'],
  hobbies: [
    {
      name: 'Snowboarding',
      type: 'Outdoors'
    },
    {
      name: 'Rock Climbing',
      type: 'Outdoors'
    },
    {
      name: 'Watching Movies',
      type: 'Indoors'
    }
  ],
  family: [
    {
      name: 'Troy',
      relation: 'Dad',
      gender: 'Male'
    },
    {
      name: 'Heather',
      relation: 'Mom',
      gender: 'Female'
    },{
      name: 'Elizabeth',
      relation: 'Sister',
      gender: 'Female'
    }
  ],
  restaurants: [
    {
      name: 'Cafe Rio',
      type: 'Mexican',
      rating: '4.5 Stars'
    },
    {
      name: 'McDonalds',
      type: 'Fast Food',
      rating: '3.5 Stars'
    },
    {
      name: 'Burger King',
      type: 'Fast Food',
      rating: '2 Stars'
    }
  ]
};
module.exports = user;