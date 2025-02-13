import fsPromises from 'fs/promises';
//import path from "path";
//import fs from 'fs';

import { 
  getComponentNames,
  getComponentData,
  //renderTemplate,
  createExampleTemplates,
  createTocTemplate,
  //tocItemTemplate,
  createComponentIndex
} from './toc-build-helpers.js';


export async function buildComponetToc(){
  console.log('---Build Component TOC---');

  // const componentDirPath = './dxp/component-service';
  const componentDirPath = 'dxp/component-service';
  const templatePath = 'src/scripts/build-scripts/examplePageMarkup.txt';
  const tocTemplatePath = 'src/scripts/build-scripts/tocMarkup.txt';

  // const tocTemplateOutputPath = 'tmp';
  // const pathTmp = 'tmp';
  //const templateOutputPath = 'src/html/components';
  const templateOutputPath = 'src/global_components/components';
  const tocTemplateOutputPath = 'src/global_components/content';

  const template = await fsPromises.readFile(templatePath,'utf8');
  const tocTemplate = await fsPromises.readFile(tocTemplatePath,'utf8');
  const componentNames = await getComponentNames(componentDirPath);
  const componentData = await getComponentData(componentNames,componentDirPath);

  await createExampleTemplates(componentData,template,templateOutputPath);
  await createTocTemplate(componentData,tocTemplate,tocTemplateOutputPath);
  await createComponentIndex(componentData,templateOutputPath);
  //await createComponentIndex(componentData,pathTmp);
  //console.log('---TOC Files Successfully Generated---');
}