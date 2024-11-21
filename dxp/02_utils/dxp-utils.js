
export async function formatMatrixURItoID(asset) {
    // Use a regex to match the prefix 'matrix-asset://' and any identifier that follows it until the next '/'
    return asset.replace(/^matrix-asset:\/\/[^/]+\//, '');
}