export interface User {
  id: string;
  name: string;
}

export class UserModel implements User {
  /**
   * 创建一个MsgModel实例
   * 用于单个Msg(评论)的操作
   * @param {object} store 传入TodoStore，获取领域模型状态和方法
   * @param {number} id 用于前端操作的实例id
   * @param {string} nickname 评论者昵称
   * @param {string} headimgurl 评论头像图片地址
   * @param {string} words 评论
   * @param {string} uuid 评论者的opeid
   * @param {number} thumbs 点赞数量
   * @param {boolean} thumbed 本人是否已经点赞
   * @param {string} reply 回复的内容
   * @param {number} rthumbs 回复的点赞数
   * @param {boolean} rthumbed 回复本人是否已点赞
   * @param {boolean} hasReply 是否有回复
   * @memberof MsgModel
   */

  id: string;
  name: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
  }
}
