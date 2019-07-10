import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from '../theme/globalStyle';
import Header from './header';

const ContentWrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding-top: 100px;
`;

const Layout = ({ children }) => (
    <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}>
          <html lang="en" />
        </Helmet>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </>
    )}
  />
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;