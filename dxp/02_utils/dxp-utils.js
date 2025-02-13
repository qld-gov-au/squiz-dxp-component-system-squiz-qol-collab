
export async function formatMatrixURItoID(asset) {
    // Use a regex to match the prefix 'matrix-asset://' and any identifier that follows it until the next '/'
    return asset.replace(/^matrix-asset:\/\/[^/]+\//, '');
}

const dataItem = (item) => `<pre><strong>${item.name}:</strong> ${JSON.stringify(item.value, null, 2)}</pre>`;

export const DebugPanel = (data) => `<div class="debug-panel">
        <h4>Debug Data</h4>
        ${data.map((item) => dataItem(item)).join('')}
    </div>`;