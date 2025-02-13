// this file is auto-generated by the build-component-toc.js script
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
              <h2>Callout Component Example [1.0.1]</h2>
              <!--@@ cmp qgds-bs5-local/callout @@-->
            </div>
          </div>
        </div>
      </div>
    </main>
      
    ${Footer}
  `;
};