/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Status page so that anyone who needs to can verify that the packager is
 * running on 8081 and not another program / service.
 */
module.exports = function statusPageMiddleware(req, res, next) {
  if (req.url === '/status') {
    res.end('packager-status:running');
  } else {
    next();
  }
};
