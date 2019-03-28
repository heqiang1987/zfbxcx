'use strict';

module.exports = async (ctx) => {
  // 从支付宝 OpenAPI 获取用户信息
  const user = await ctx.basement.openapi.alipay.exec('alipay.user.info.share');

  // 返回用户信息
  return user;
};
