const assetPrefix = process.env.BUILDING_FOR_NOW || process.env.NODE_ENV !=='production' ? '/gsadmin' : ''
module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
}
