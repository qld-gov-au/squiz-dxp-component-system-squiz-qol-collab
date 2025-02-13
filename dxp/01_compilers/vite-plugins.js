import { readFileSync } from 'fs';
import { globSync } from 'glob';
import path from 'path';
import generateManifestRecord from './manifest-compiler';
import { buildComponetToc } from '../../src/scripts/build-scripts/build-component-toc';


/**
 * Make a fetch GET request and it if it fails retry N times with a X delay between requests 
 * @param {String} url url to send the GET request to
 * @param {Object} options additional fetch options object
 * @param {Number} delay delay between requests in ms
 * @param {Number} retryCount max retry count
 * @returns {Promise}
 */
const fetchWithRetry = async (url, options = {}, delay = 200, retryCount = 3) => {
  let attempts = 0;

  const executeRequest = async () => {
    try {
      attempts++;
      const response = await fetch(url, { ...options, method: 'GET' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (attempts >= retryCount) {
        throw error;
      }
      console.warn(`Request failed, retrying in ${delay}ms... (Attempt ${attempts}/${retryCount})`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return executeRequest();
    }
  };

  return executeRequest();
}

// Example asynchronous component rendering function
async function renderComponent(path, previewKey) {
    try {
        const manifestRecords = JSON.parse(readFileSync('./dxp/01_compilers/manifests.json', 'utf-8'));
        const resolvedManifestPath = manifestRecords.find((item) => item.replace(/\/[^/]*$/, '') === path);
        if (!resolvedManifestPath) {
            throw new Error(`Path "${path}" not found in manifest records. Check ./dxp/01_compilers/manifests.json.`);
        }
        const [namespace, name, version] = resolvedManifestPath.split('/');
        //const componentPath = `http://localhost:5555/dev/render/${namespace}__${name}__${version}?_previewKey=${previewKey}`;
        //const response = await fetch(componentPath);
        const response = await fetchWithRetry(`http://localhost:5555/dev/render/${namespace}__${name}__${version}?_previewKey=${previewKey}`, {}, 200, 5);

        const data = await response.text();

        //console.log('renderComponent data: ', data);
        return data;
    } catch (err) {

        console.error('renderComponent error: ', err);

        // if (err.toString().includes('TypeError: fetch failed')) {
        //     console.log('*******************************************************************');
        //     console.log('  If you stop and re-start the dev server with "npm run dev"');
        //     console.log('  And encouter this error: "TypeError: fetch failed"');
        //     console.log('  Or you are finding that your component is failing to render');
        //     console.log('  You might need to close the current Browser Window');
        //     console.log('  re-run "npm run dev"');
        //     console.log('  Then open your component again, in a new Browser Window');
        //     console.log('  Sometimes just editing your main.js and saving again works too...');
        //     console.log('*******************************************************************');
        // }

        // return '';
    }
}

export async function dxp() {
    return {
        name: 'dxp-plugin',
        enforce: 'pre',
        configResolved() {
            // This runs before the server starts and the config is fully resolved
            // generate manifest entries
            generateManifestRecord('/manifest.json');
            // generate TOC
            buildComponetToc();
        },
        buildStart() {
            // console.log('#### buildStarts');
        },
        async watchChange(file) {
            // console.log('#### watchChange id', id)
            //console.log('#### watchChange file:', file);
            await generateManifestRecord(file);
        },
        handleHotUpdate(file) {
            //console.log('#### handleHotUpdate file:', file);
            //buildComponetToc();            
        },
        async transform(code, id) {
            if (process.env.NODE_ENV !== 'development') return;
            if (!id.endsWith('.js')) return;
            if (!(id.includes('/src/global_components/') || id.includes('/src/html/'))) return;

            // add component files to watch files so changes are fetched
            const entryFiles = globSync(path.join('.', 'dxp', 'component-service', '**', 'main.js'));
            entryFiles.forEach((entryFile) => {
                this.addWatchFile(entryFile);
            });

            // Regex to match component patterns
            const regex = /<!--@@\s*cmp\s+([\w-/]+)(?:\s+([\w-]+))?\s*@@-->/g;
            const matches = [...code.matchAll(regex)];
            const promises = [];

            for (const match of matches) {
                const [fullMatch, componentPath, previewKey = 'default'] = match;
                const renderPromise = renderComponent(componentPath, previewKey).then((renderedComponent) => {
                    return {fullMatch, renderedComponent};
                });
                promises.push(renderPromise);
            }

            const resolvedComponents = await Promise.all(promises);

            for (const {fullMatch, renderedComponent} of resolvedComponents) {
                code = code.replace(fullMatch, renderedComponent);
                //console.log('transform: code', code);
            }
            return {
                code,
                map: null,
            };
        },
    };
}
