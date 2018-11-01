// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    isError: false,
    errorText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 输入手机号
   */
  bindPhoneInput: function(item){
    this.setData({
      phone: item.detail.value
    })
  },
  
    /**
   * 输入密码
   */
  bindPasswordInput: function (item) {
    this.setData({
      password: item.detail.value
    })
  },


  /**
 * 点击登录按钮
 */
  login: function (item) {
    if(this.data.phone === '' || this.data.password === ''){
      this.setData({
        isError: true,
        errorText: "手机号码或密码不能为空"
      })
      return;
    }
    let that = this;
    wx.request({
      url: `${app.globalData.apiUrl}/login`,
      data: {
        phone: this.data.phone,
        password: this.data.password
      },
      method: "POST",
      success: function(res){
        if(res.data.success){
          wx.setStorageSync("USERID", res.data.userID);
          wx.switchTab({
            url: '/pages/department/department',
          });
        }else{
          that.setData({
            isError: true,
            errorText: "请输入正确的手机号码或密码"
          })
        }
      },
      fail: function(item){
        console.log(item)
      },
      complete: function(item){
        console.log(item)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})