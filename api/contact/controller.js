/*
 * 登录
 */
exports.Login = async (ctx) => {
  let phone = ctx.request.body.phone || '';
  let psd = ctx.request.body.password || '';
  if (!phone || !psd) {
    ctx.body = {
      success: false,
      message: '手机号码或密码不能为空'
    };
    return false;
  }
  try {
    let result = await ctx.execSql(`select * from contact_user where phone = ? and password = ?`, [phone, psd]);
    if (result.length > 0) {
      ctx.body = {
        success: true,
        userID: result[0].id,
        message: ''
      };
    } else {
      ctx.body = {
        success: false,
        userID: 0,
        message: '账号或密码错误'
      };
    }
  } catch (err) {
    ctx.body = {
      success: false,
      userID: 0,
      message: err
    };
  }
}