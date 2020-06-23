import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Layout from 'layouts/layout';
import { CardBody } from 'reactstrap';

const Error = ({ error }) => {
  return (
    <Layout>
      <CardBody>
        <h4>Status Code 500: Internal Server Error</h4>
        <p className="error-text">{error}</p>
        <p>Please contact support for assistance.</p>
      </CardBody>
    </Layout>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

const wrapper = document.getElementById('react-root');
const element = <Error {...window.reactProps} />;
if (wrapper) {
  ReactDOM.render(element, wrapper);
}
