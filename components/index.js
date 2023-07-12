import { Loader } from './Loader';

import dynamic from 'next/dynamic';

export const DynamicCard = dynamic(() => import('./Card'), {
  loading: () => <Loader />,
});
export const DynamicCardHeader = dynamic(() => import('./Header'), {
  loading: () => <Loader />,
});
export const DynamicCardFooter = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});
