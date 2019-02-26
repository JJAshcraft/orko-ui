import React from 'react';
import { DefaultLayout } from '../layouts/Default';

const Index = () => (
  <DefaultLayout
    render={({ Header }) => (
      <>
        <Header title="About Page" />
      </>
    )}
  />
);

export default Index;
