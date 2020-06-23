const serialize = require('serialize-javascript');

const renderPage = (req, res, props, page, loginCallback) => {
  return res.render('page', {
    reactProps: serialize(props),
    page,
    loginCallback,
  });
};

const handleError = (req, res, error) => {
  console.error(error);
  const reactProps = { error };
  return renderPage(req, res, reactProps, 'error', req.path);
};

module.exports = {
  renderPage,
  handleError,
};
