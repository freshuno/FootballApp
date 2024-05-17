exports.getPage = (req, res, next) => {
  res.render('landingPage', {
    pageTitle: 'Landing Page'
  });
};