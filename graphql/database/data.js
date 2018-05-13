module.exports.standUsers = [{
  name: 'Jotaro Kujo',
  gender: 'Male',
  nationality: 'Japanese',
}];

module.exports.stands = [{
  name: 'Star Platinum',
  type: ['CLOSE-RANGE'],
  user: module.exports.standUsers.find(user => user.name === 'Jotaro Kujo'),
}];
