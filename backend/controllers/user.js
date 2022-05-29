const { user } = require('../models');

const verifyIfTestUserExists = async (req, res) => {
  const existAnyUser = await user.findOne();

  // mocking user for test purpose
  if (existAnyUser === null) {
    await user.create({
      username: 'test',
      password: 'test',
      email: 'test@test.com',
    });
  }

  const { username, password } = req.body;

  const userQuery = await user.findOne({
    where: { username: username, password: password },
  });

  if (userQuery !== null) {
    res.status(200).json(userQuery);
  } else {
    res.status(404).json('Username and password does not match');
  }
};

module.exports = {
  verifyIfTestUserExists,
};
