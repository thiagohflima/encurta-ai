const { link } = require('../models');

const setRedirect = async (req, res) => {
  const { linkShort } = req.params;

  const thisLinkShortExists = await link.findOne({
    where: { linkShort: linkShort },
  });

  if (thisLinkShortExists !== null) {
    res.redirect(thisLinkShortExists.linkLong);
  } else {
    res.status(404).json('LinkShort not found');
  }
};

module.exports = {
  setRedirect,
};
