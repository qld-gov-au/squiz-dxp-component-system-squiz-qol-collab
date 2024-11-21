import {formatMatrixURItoID} from '../../02_utils/dxp-utils';

/**
 * Accordion - dynamic component
 */
export default {
    async main(input, info) {
        try {
            const assetId = await formatMatrixURItoID(input.root);
            const apiQuery = '/card-dynamic?root=' + assetId;
            // ---------
            // SWITCH these over once the API becomes available
            // const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;
            const apiUrl = 'http://localhost:5000/src/data/card-dynamic.json';
            // ---------
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const output = `${
                data
                    ? `<!-- QGDS Component: Card list -->
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-${input.cols} g-4">
            ${data
                .map((item) => {
                    return `
                    <!-- QGDS Partial: card -->
                    <div class="col">
                        <div class="card card-default default card-single-action">
                            <div class="card-img ratio ratio-16x9">
                                <div class="card-img-top" style="background-image: url(${item.image.url})" alt="${item.image.attributes.alt}"></div>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">
                                    <a href="${item.link}" class="stretched-link">${item.heading}</a>
                                </h3>
                                <div class="card-text">
                                    ${item.leadText}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                })
                .join('')}
            </div>
            `
                    : ``
            }
            `;

            return output;
        } catch (error) {
            console.error('Component render error', error);
        }
    },
};
