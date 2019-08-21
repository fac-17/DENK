exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Balls! What you\'re looking for isn\'t here',
  });
};

exports.server = (err, req, res, next) => {
  console.log(err)
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: 'Internal rupture. Watch out!',
  });
};
