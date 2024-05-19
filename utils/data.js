const users = [
    { username: 'Thomas', email: 'tom101@gmail.com' },
    { username: 'Peyton', email: 'peyton19892@gmail.com' },
    { username: 'Samuel', email: 'samlee3@yahoo.com' },
    { username: 'William', email: 'will2024@hotmail.com' },
    { username: 'Johnson', email: 'johnson@outlook.com' },
    { username: 'Marian', email: 'mary1989@gamil.com'}
  ];

  const thoughts = [
    { thoughtText: 'How is everyone doing?', username: 'Thomas' },
    { thoughtText: 'Suggest any good books to read this summer ', username: 'Peyton' },
    { thoughtText: 'Waiting for my vacation', username: 'Samuel' },
    { thoughtText: 'Who is up for a pool party this weekend', username: 'William' },
    { thoughtText: 'Got promoted to the Senior Manager today! ', username: 'Johnson' },
    { thoughtText: 'Finally submitted our project, feeling relaxed ', username: 'Marian'}
  ];

  const reactions = [
    { reactionBody: 'Its been a long day!', username: 'Peyton' },
    { reactionBody: 'look for New York Times bestsellers!', username: 'Thomas' },
    { reactionBody: 'Takes us with you', username: 'William' },
    { reactionBody: 'Working unfortunately', username: 'Samuel' },
    { reactionBody: 'Many many congratulations', username: 'Marian' },
    { reactionBody: 'Good job', username: 'Johnson' },
  
  ];
  
  module.exports = { users, thoughts, reactions };