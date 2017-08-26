export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export const fetchProjects = () => {
  // try {
  //   const zipcode = await reverseGeocode(region);
  //   const url = buildJobsUrl(zipcode);
  //   const data = await (await fetch(url, { method: 'GET' })).json();

  //   dispatch({
  //     type: FETCH_PROJECTS,
  //     payload: data,
  //   });
  //   callback();
  // } catch (err) {
  //   console.error(err);
  // }
  const data = {
    data: [
      {
        id: 0,
        title: 'Some random project',
        description: 'This is description of some random project.',
        postedBy: 'John Doe',
        createdDate: 'xx.xx.xxxx',
        techRequired: ['JS', 'ReactNative'],
        skillsRequired: ['10 years of coding'],
      },
      {
        id: 1,
        title: 'Some random project2',
        description: 'This is description of some random project.',
        postedBy: 'John Doe',
        createdDate: 'xx.xx.xxxx',
        techRequired: ['JS', 'ReactNative'],
        skillsRequired: ['10 years of coding'],
      },
      {
        id: 2,
        title: 'Some random project3',
        description: 'This is description of some random project.',
        postedBy: 'John Doe',
        createdDate: 'xx.xx.xxxx',
        techRequired: ['JS', 'ReactNative'],
        skillsRequired: ['10 years of coding'],
      },
    ],
  };

  return {
    type: FETCH_PROJECTS,
    payload: data,
  };
};
