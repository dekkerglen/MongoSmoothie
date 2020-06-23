import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'layouts/layout';
import { CardBody } from 'reactstrap';

const Landing = () => {
  return (
    <Layout>
      <CardBody />
    </Layout>
  );
};

const wrapper = document.getElementById('react-root');
const element = <Landing {...window.reactProps} />;
if (wrapper) {
  ReactDOM.render(element, wrapper);
}
