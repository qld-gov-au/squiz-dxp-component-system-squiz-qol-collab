import { TOC } from '@global_components/content/toc';

const repoNotes = `<div class="container mt-5">
      <!-- Folder Structure Section -->
      <section id="folder-structure" class="mb-5">

        
        <h2>Folder Structure</h2>
        <p>The Kernel repository has the following key folders and files:</p>
        <ul>
          <li>
            <strong>/dxp</strong> - Houses DXP-related code, such as:
            <ul>
              <li><strong>/component-service</strong> - Code for the Component Service.</li>
              <li><em>...and any other DXP services</em>.</li>
            </ul>
          </li>
          <li>
            <strong>/src</strong> - Contains all working files, including:
            <ul>
              <li>
                <strong>entry-server.js</strong> - Defines the viewable page templates, such as the index, homepage, and content pages.
              </li>
              <li>
                <strong>/global-components</strong> - Contains global template elements like the header and footer that are not part of the component service.
              </li>
              <li>
                <strong>/html</strong> - Contains JavaScript files representing HTML templates.
              </li>
              <li>
                <strong>/image</strong> - Stores any required images.
              </li>
              <li>
                <strong>/scripts</strong> - Contains the main JavaScript files for the application build.
                <ul>
                  <li>
                    <strong>main.js</strong> - The entry point for bundling into the final export, client.js. It imports the working files needed for production.
                  </li>
                  <li>
                    <strong>/components</strong> - Contains all JavaScript related to site components and templates, which are bundled and sent to the front end.
                  </li>
                </ul>
              </li>
              <li>
                <strong>/styles</strong> - Contains all CSS, with <code>main.scss</code> as the entry point.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="mt-5">
        <h1>Using it</h1>
        <p>
          Create a new component or copy an existing component to get started. Place it under <code>/dxp/component-service/</code>
        </p>
        <p><span class="badge text-bg-warning rounded-pill">Warning</span> When you create a new component, you may need to run <code>npm run dev</code> again.</p>
        <ul>
          <li>Configure the <code>manifest.json</code></li>
          <li>Add frontend CSS to <code>/src/styles/</code></li>
          <li>Add frontend JS to <code>/src/scripts/</code></li>
          <li>Set up the component <code>main.js</code> to export HTML</li>
        </ul>

        <h2>How to preview the component</h2>
        <p>Open a template from <code>/src/html/</code> (Example: <code>/src/html/homepage.js</code>)</p>
        <ul>
          <li>Add the component import reference. 
            Example: <code>&lt;!--@@ cmp kernel/hello-world @@--&gt;</code>
          </li>
          <li>Start up the local dev server <code>npm run dev</code></li>
          <li>Preview the front end! Visit <a href="http://localhost:5000/">http://localhost:5000/</a></li>
        </ul>
        

      </section>

      <section class="mt-5">
        <h1>Bundling for deployment</h1>
        <p>
          To package the project for production, run <code>npm run build</code>
        </p>
        <ul>
          <li>Generates a <code>/dist</code> folder containing <code>client.js</code> and <code>client.css</code></li>
          <li>Push changes to GIT</li>
          <li>Deploy components!</li>
        </ul>
        <h2>Command cheat sheet</h2>
        <ul>
          <li>Login: <code>dxp-next auth login --tenant={tenant-id}</code></li>
          <li>Deploy: <code>FEATURE_EDGE_COMPONENTS=true dxp-next cmp deploy dxp/component-service/{cmp_directory}</code></li>
        </ul>
      </section>

    </div>`;


    export const getStarted = ` <main>
      <div class="container-fluid">
        <div class="container qld-content">
          <div class="row">
          ${TOC}              
            <div class="col-12 col-lg-8 ps-lg-64 qld-content-body" id="content">              
            ${repoNotes}
            </div>
          </div>
        </div>
      </div>
    </main>`