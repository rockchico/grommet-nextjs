import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, Router } from 'next/router';
import 'isomorphic-fetch';
import Page from '../components/app/Page';
import TemplatesGroup from '../components/markdown/TemplatesGroup';

interface TemplatesProps {
  grouped: object,
  router: Router,
}
class Templates extends React.Component<TemplatesProps> {
  static async getInitialProps({ query, req }) {
    const { category = 'page' } = query;
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/templates/byCategory/${category}`);
    const templates = await r.json();
    const grouped = templates[category].reduce((rv, x) => {
      const names = x.name.split('/');
      const group = names.length > 1 ? names[0] : '';
      // eslint-disable-next-line no-param-reassign
      (rv[group] = rv[group] || []).push(x);
      return rv;
    }, {});
    return {
      grouped,
    };
  }

  render() {
    const { grouped, router } = this.props;
    const { category } = router.query;
    return (
      <Page
        title={`${category} templates`}
      >
        {Object.keys(grouped).sort().map(key => (
          <TemplatesGroup
            category={category as string}
            key={`teamplate_${key}`}
            group={key}
            templates={grouped}
          />
        ))}
      </Page>
    );
  }
}

export default withRouter(Templates);
