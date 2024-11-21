// template imports
import { Header } from '@global_components/header/header';
import { Footer } from '@global_components/footer/footer';
import { Sidebar } from '@global_components/content/sidebar';

// render template
export default async function () {
  return `
    ${Header}
    
    <main>
      <div class="container-fluid">
        <div class="container qld-content">
          <div class="row">                      
            <div class="col-12 col-lg-8 ps-lg-64 qld-content-body" id="content">              
              <h2>Accordion Example</h2>
              <!--@@ cmp qgds-bs5-local/accordion @@-->
            </div>
          </div>
        </div>
      </div>
    </main>      
    ${Footer}
  `;
};