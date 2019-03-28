'use strict';

module.exports = async (ctx) => {
  const user = await ctx.basement.openapi.alipay.exec('alipay.user.info.share');
  const images = await ctx.basement.db.collection('images').find({ userId: user.userId });

  // 如果没有任务，返回 null
  if (!images.affectedDocs) {
    return null;
  }

  // 获取结果值
  const total = images.result.length || 0;

  return {
    total: total,
  };
};
