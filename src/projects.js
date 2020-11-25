const projects = {
  1: {
    name: 'Custom CMS / Family Website',
    image: 'one-more-lamore.png',
    prodLink: 'https://onemorelamore.com',
    github: 'https://github.com/jlamoreaux/one-more-lamore',
    description:
      'A family website built on a custom CMS with CRUD capability for photo galleries and blog posts. Built on Node.js, using PUG to render the views. Data stored in a MongoDB database. Password protected with Passport local auth.',
  },
  2: {
    name: 'On the Bubble',
    image: 'onthebubble.png',
    prodLink: 'https://github.com/jlamoreaux/sports-blog',
    github: 'https://dudesonthebubble.com',
    description:
      'Website built using NextJS React framework, Sanity.io headless CMS, Tailwind CSS framework',
  },
  3: {
    name: 'BEVERLY HILLS SCHOOL DISTRICT SCHOOL FINDER',
    image: 'schoolfinder.png',
    prodLink:
      'https://www.bhusd.org/apps/pages/index.jsp?uREC_ID=799244&type=d&pREC_ID=1656629',
    github: 'https://github.com/jlamoreaux/district_map',
    description:
      'A web app built on Node.js. Users enter thier address (using Google Places API) and the applicaton searches their address against database of schools in the district. Returns contact information for the school using an API.',
  },
  4: {
    name: 'Blog - Press Films and Media',
    image: 'press.png',
    prodLink: 'https://blog.pressfilmandmedia.com',
    // github: '',
    description:
      'A Mobile-responsive blog for a videographer. This site uses a custom WordPress theme. Hosted on an Apache server on AWS. Main languages used: PHP, SCSS.',
  },
  5: {
    name: 'Trip / Weather Planner',
    image: 'weather.png',
    prodLink: 'https://hows-the-weather-jlmx.herokuapp.com/',
    github: 'https://github.com/jlamoreaux/hows-the-weather',
    description:
      'A trip planner that allows you to add trip destinations and displays the weather for the specified date. Built using Node.js, JavaScript, SCSS. Data pulled from Google Maps, GeoNames, Weatherbit and PixaBay APIs.',
  },
};

export default projects;