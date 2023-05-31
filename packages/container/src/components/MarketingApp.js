import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';

export default () => {
  useEffect(() => {
    mount(ref.current);
  });

  const ref = useRef(null);
  return <div ref={ref} />;
};
