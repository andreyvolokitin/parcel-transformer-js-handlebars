'use strict'

const { Transformer } = require('@parcel/plugin');

const transformer = new Transformer({
  async transform({asset}) {
    const content = await asset.getCode();

    asset.type = 'js';
    asset.setCode("export default `" + content + "`");

    return [asset];
  }
});

module.exports = transformer;