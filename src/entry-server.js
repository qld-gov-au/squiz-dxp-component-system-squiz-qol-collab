import Index from "@pages/index.js";
import Homepage from "@pages/homepage.js";
import NotFound from "@pages/404.js";
import ContentPage from "@pages/content.js";
import { tocNames } from '@global_components/content/toc';
import * as ComponentExamples from "@global_components/components/component-index.js";
import { DesignPreviewHeader } from "./global_components/content/design-preview";

const funcDebugStr = (params) => {
  const {url, funcName, componentFnName,funcStr, urlArr, urlIncludes} = params;
  return `<div style="padding:15px; border: dashed 2px red; background: lightpink">
      <p><strong>url:</strong> ${url}</p>\r\n
      <p><strong>funcName:</strong> ${funcName}</p>\r\n      
      <p><strong>componentFnName:</strong> ${componentFnName}</p>\r\n
    </div>\r\n`;
}

export async function render(url = '', ssrManifest) {
  // Define basic page templates or import your component-rendering logic here
  let htmlContent = `<p><strong>url:</strong> ${url}</p>\r\n`;
  let pageTitle = `<title>E R R O R</title>`;

  if (url !== '' && tocNames.includes(url)) {    
    const funcName = url.split('-');    
    const componentFnName = funcName.map( word => {
        return word[0].toUpperCase() + word.substring(1);
    }).join('');

    const funcDebug = funcDebugStr({url, funcName, componentFnName});

    if (componentFnName === 'Vite.svg') {
      console.log('err: ', componentFnName);
      return {
        head: `<title>${pageTitle}</title>`, // Add other head elements if needed
        //html: htmlContent,
        html: htmlContent,
      };
    }

    pageTitle = funcName.map( word => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(' ') + ' Component Example';
    
    const componentFunc = ComponentExamples[componentFnName];

    if (typeof componentFunc !== 'function') {
      console.warn('ComponentFunc is not a fuction:', componentFnName);
      
      return {
        head: `<title>E R R O R</title>`, // Add other head elements if needed
        html: funcDebug,
        //html: allFuncs + funcDebug + htmlContent,
      };
    }
    
    htmlContent = await componentFunc();

    const previewHeader = DesignPreviewHeader();
    
    return {
      head: `<title>${pageTitle}</title>`, // Add other head elements if needed
      //html: previewHeader + htmlContent,
      html: htmlContent,
    };    
  }

  switch (url) {
    case "":
      pageTitle = "coreDXP";
      htmlContent = await Index();
      break;
    
      case "content":
      pageTitle = "Content Page";
      htmlContent = await ContentPage();
      break;
    
      default:
      pageTitle = "404 Not Found";      
      htmlContent = await NotFound();
      break;
  }

  return {
    head: `<title>${pageTitle}</title>`, // Add other head elements if needed
    html: htmlContent,
  };
}
