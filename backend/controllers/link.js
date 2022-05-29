const { link } = require('../models');

const getAllLinksByUser = async (req, res) => {
  const { userId } = req.body;

  const linkQuery = await link.findAll({
    where: { userId: userId },
  });
  res.status(200).json(linkQuery);
};

const getLinkById = async (req, res) => {
  const { id } = req.params;

  const linkQuery = await link.findOne({
    where: { id: id },
  });

  if (linkQuery !== null) {
    res.status(200).json(linkQuery);
  } else {
    res.status(404).json('Id not found');
  }
};

const createLink = async (req, res) => {
  const { userId, linkLong, linkShort } = req.body;

  if (userId && linkLong && linkShort) {
    const linkQuery = await link.create({
      userId,
      linkLong,
      linkShort,
    });

    res.status(201).json({ message: 'Created', newLink: linkQuery });
  } else {
    res.status(404).json({ message: 'Missing fields' });
  }
};

const deleteLink = async (req, res) => {
  const { id } = req.params;

  const thisIdExists = await link.findOne({
    where: { id },
  });

  if (thisIdExists !== null) {
    const linkQuery = await link.destroy({
      where: { id },
    });

    res.status(200).json({ message: 'Deleted' });
  } else {
    res.status(404).json('Id not found');
  }
};

const updateLink = async (req, res) => {
  const { id } = req.params;
  const { linkLong, linkShort } = req.body;

  const thisIdExists = await link.findOne({
    where: { id },
  });

  if (thisIdExists !== null) {
    if (linkLong && linkShort) {
      const linkQuery = await link.update(
        {
          linkLong,
          linkShort,
        },
        {
          where: { id },
        },
      );
      res.status(200).json({
        message: 'Updated',
        updatedVehicle: {
          id,
          linkLong,
          linkShort,
        },
      });
    } else {
      res.status(404).json({ message: 'Missing fields' });
    }
  } else {
    res.status(404).json('Id not found');
  }
};

module.exports = {
  getAllLinksByUser,
  getLinkById,
  createLink,
  deleteLink,
  updateLink,
};
