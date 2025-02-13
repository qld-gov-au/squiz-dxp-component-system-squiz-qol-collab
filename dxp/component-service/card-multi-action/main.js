import {formatMatrixURItoID} from '../../02_utils/dxp-utils';

/**
 * Card Curated 3 Columns
 */
export default {
    async main(input, info) {
        try {
            const assetIds = input.linkItems.map((link) => link.linkSource);
            const assetArr = await Promise.all(assetIds.map(async (asset) => await formatMatrixURItoID(asset)));

            const apiQuery = '/links-list?root=' + assetArr;
            // ---------
            // SWITCH these over once the API becomes available
            const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;
            // const apiUrl = 'http://localhost:5000/src/data/links-list.json';

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const output = `${
                data
                    ? `
                    <!-- QGDS Partial: card -->
                    <div class="col-md-12 col-lg-12">
                        <div class="card card-default default  card-multi-action card-feature card-feature-${input.imagePosition}">
                            <div class="card-img ratio ratio-16x9">
                                <div class="card-img-right" style="--card-image:url(${input.image.imageVariations.original.url})" alt="${input.image.alt}"></div>
                            </div>
                            <div class="card-inner">
                                <div class="card-body">
                                    <h3 class="card-title">
                                    ${input.cardTitle}
                                    </h3>
                                    <div class="card-text">
                                        ${input.subText}
                                    </div>
                                </div>
                                ${
                                    data
                                        ? `
                                <div class="card-footer">
                                    <ul>

                                        ${data
                                            .map((item) => {
                                                return `
                                            <li><a href="${item.link}">${item.heading}</a></li>
                                        `;
                                            })
                                            .join('')}
                                        
                                    </ul>
                                </div>
                                `
                                        : ``
                                } 
                                
                            </div>
                        </div>
                    </div>
                    `
                    : ``
            }`;

            return output;
        } catch (error) {
            console.error('Component render error', error);
        }
    },
};
