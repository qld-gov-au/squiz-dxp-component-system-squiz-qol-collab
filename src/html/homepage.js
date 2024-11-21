// template imports
import { Header } from '@global_components/header/header';
import { Footer } from '@global_components/footer/footer';

// render template
export default async function () {
  return `
    ${Header}
    
    <main id="content">
      <div class="homepage pb-0">
          <h1 class="sr-only">Homepage</h1>
          <!--@@ cmp qgds-bs5-local/blockquote @@-->
      </div>
    </main>
    
    ${Footer}
  `;
};