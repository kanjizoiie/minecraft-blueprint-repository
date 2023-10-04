import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Root from './views/Root';
import Menu from './views/Menu';
import { FeedView } from "./views/FeedView";
import { BlockView } from "./views/BlockView";
import { BlueprintView } from "./views/BlueprintView";
import { MainView } from "./views/MainView";

const root = createRoot(document.getElementById('root'));

function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Something went wrong</div>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootBoundary />,
    children: [
      {
        path: '/',
        element: <Menu />,
        children: [
          {
            path: '/feed',
            element: <FeedView />,
          },
          {
            path: '/block',
            element: <BlockView />,
          },
          {
            path: '/blueprint',
            element: <BlueprintView />,
          },
          {
            path: '/',
            element: <MainView />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <RouterProvider router={router} />
);
