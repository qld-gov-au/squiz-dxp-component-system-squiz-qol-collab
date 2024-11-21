// template imports
import { Header } from '@global_components/header/header';
import { Footer } from '@global_components/footer/footer';
import { getStarted } from '@global_components/content/getting-started';

// render template
export default async function() {
  return `
    ${Header}
  
    ${getStarted}
    
    ${Footer}
  `;
};
