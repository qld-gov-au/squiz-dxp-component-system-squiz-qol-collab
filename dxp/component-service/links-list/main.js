import {formatMatrixURItoID, DebugPanel} from '../../02_utils/dxp-utils';
/**
 * Links list component
 */
export default {
    async main(input, info) {
        try {
            //const environment = {'NODE_ENV':'development'};
            const assetIds = input.linkItems.map((link) => link.linkSource);
            const assetArr = await Promise.all(assetIds.map(async (asset) => await formatMatrixURItoID(asset)));
            const apiQuery = '/links-list?root=' + assetArr;
            // ---------
            // SWITCH these over once the API becomes available
            const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;
            //const apiUrl = 'http://localhost:4000/src/data/links-list.json';
            // ---------

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const showDebug = true;

            const debugVars = [
                {
                    name: 'apiUrl',
                    value: apiUrl,
                },
                {
                    name: 'remote api data',
                    //name: 'Local Mock Data',
                    value: data,
                },
            ];

            const output = /* HTML */ `${data &&
            /* HTML */ `
                ${showDebug ? DebugPanel(debugVars) : ''}
                <!-- QGDS Component: Links list -->
                <div class="container-fluid qld-banner ${input.bgColour}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>${input.sectionTitle}</h2>
                                ${input.subText}
                                <ul aria-label="Related links" class="qld__link-columns qld__link-columns--2-col">
                                    ${data
                                        .map((item) => {
                                            return `<li><a href="${item.link}">${item.heading}</a></li>`;
                                        })
                                        .join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `} `;

            return output;
        } catch (error) {
            console.error('Component render error', error);
        }
    },
};
