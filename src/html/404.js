// template imports
import { Header } from '@global_components/header/header';
import { Footer } from '@global_components/footer/footer';
import { TOC } from '@global_components/content/toc';

// render template
export default async function () {
  return `
    ${Header}
    
    <main>
      <div class="container-fluid">
        <div class="container qld-content">
          <div class="row">
          ${TOC}              
            <div class="col-12 col-lg-8 ps-lg-64 qld-content-body" id="content">                            
                <h1>404 - Page not found</h1>
                <p>⚠️ It is more than likely that you just need to add your page page to this file ./src/entry-server.js</p>
            </div>
          </div>
        </div>
      </div>
    </main>
      
    ${Footer}
  `;
};