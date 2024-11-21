// template imports
import { Header } from "@global_components/header/header";
import { Footer } from "@global_components/footer/footer";

// render template
export default async function () {
  return `
    ${Header}
    
    <main>
      <div class="container-fluid">
        <div class="container qld-content">
          <div class="row">


            <div class="col-12 col-lg-8 ps-lg-64 qld-content-body" id="content">
              <h1>Card dynamic</h1>
              <!--@@ cmp qgds-bs5-local/card-dynamic @@-->
            </div>

          </div>
        </div>
      </div>
    </main>
      
    ${Footer}
  `;
}
