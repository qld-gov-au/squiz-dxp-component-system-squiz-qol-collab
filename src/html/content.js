// template imports
import {Header} from '@global_components/header/header';
import {Footer} from '@global_components/footer/footer';
import {Sidebar} from '@global_components/content/sidebar';
import {TOC} from '@global_components/content/toc';

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
              <h1>2 column content page</h1>
              <h2>Tag - dynamic</h2>
              <!--@@ cmp qgds-bs5-local/tag-dynamic @@-->


              <h2>pagination</h2> 
              <!--@@ cmp qgds-bs5-local/pagination @@-->

              <h2>card</h2>
              <!--@@ cmp qgds-bs5-local/card @@-->

              <h2>card-dynamic</h2>
              <!--@@ cmp qgds-bs5-local/card-dynamic @@-->
              
              <h2>accordion-dynamic</h2>
              <!--@@ cmp qgds-bs5-local/accordion-dynamic @@-->
              <h2>accordion</h2>
              <!--@@ cmp qgds-bs5-local/accordion @@-->
              <h2>blockquote</h2>
              <!--@@ cmp qgds-bs5-local/blockquote @@-->
              <h2>callout</h2>
              <!--@@ cmp qgds-bs5-local/callout @@-->
              <h2>Inpage Alert</h2>
              <!--@@ cmp qgds-bs5-local/inpage-alert @@-->
              <h2>table</h2>
              <!--@@ cmp qgds-bs5-local/table @@-->
              <h2>video</h2>
              <!--@@ cmp qgds-bs5-local/video @@-->
              <h2>Links list</h2>
              <!--@@ cmp qgds-bs5-local/links-list @@-->
            </div>

          </div>
        </div>
      </div>
    </main>
      
    ${Footer}
  `;
}
