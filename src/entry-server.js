import Index from "@pages/index.js";
import Homepage from "@pages/homepage.js";
import ContentPage from "@pages/content.js";
import Accordion from "@pages/accordion.js";
import AccordionDynamic from "@pages/accordion-dynamic.js";
import CardDynamic from "@pages/card-dynamic.js";

export async function render(url, ssrManifest) {
  // Define basic page templates or import your component-rendering logic here
  let htmlContent;
  let pageTitle;
  switch (url) {
    case "":
      pageTitle = "coreDXP";
      htmlContent = await Index();
      break;
    case "homepage":
      pageTitle = "Home Page";
      htmlContent = await Homepage();
      break;
    case "content":
      pageTitle = "Content Page";
      htmlContent = await ContentPage();
      break;
    case "accordion":
      pageTitle = "Accordion Example Page";
      htmlContent = await Accordion();
      break;
    case "accordion-dynamic":
      pageTitle = "Dynamic Accordion Example";
      htmlContent = await AccordionDynamic();
      break;
    case "card-dynamic":
      pageTitle = "Dynamic Card Example";
      htmlContent = await CardDynamic();
      break;
    default:
      pageTitle = "404 Not Found";
      htmlContent = `<h1>404 - Page not found</h1>
      <p>:sadpanda It is more than likely that you just need to add
      your page page to this file ./src/entry-server.js</p>
      `;
      break;
  }
  return {
    head: `<title>${pageTitle}</title>`, // Add other head elements if needed
    html: htmlContent,
  };
}
