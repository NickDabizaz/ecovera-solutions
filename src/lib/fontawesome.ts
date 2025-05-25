// src/lib/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';

// Import specific icons we'll use
import {
  faLeaf,
  faLightbulb,
  faRecycle,
  faFeather,
  faGlobe,
  faShieldAlt,
  faSun,
  faCheckCircle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faUsers,
  faChartLine, // Using faChartLine instead of faTrendingUp
  faAward,
  faHome,
  faArrowLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedin,
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

// Tell Font Awesome to skip adding the CSS automatically since we're not using a special bundler
config.autoAddCss = false;

// Add the imported icons to the library
library.add(
  faLeaf,
  faLightbulb,
  faRecycle,
  faFeather,
  faGlobe,
  faShieldAlt,
  faSun,
  faCheckCircle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faUsers,
  faChartLine,
  faAward,
  faHome,
  faArrowLeft,
  faSearch,  faLinkedin,
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
);
