import Content from './Content';
import groups from './groups';
import kebabCase from './util/kebabCase';

const routes = [];

// create routes for each component
groups.forEach(group => {
  group.components.forEach(component => {
    routes.push({
      path: '/' + kebabCase(component.name),
      component: Content,
      props: { component },
    });
  });
});

// redirect others to first route
routes.push({ path: '*', redirect: routes[0].path });

export default routes;
