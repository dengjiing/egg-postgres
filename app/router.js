'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：router.js
 * 文件描述：路由配置
 * 创建时间：2019/10/25
 * 编写作者：dengjing
 * 修改时间：NONE
 */

 // 根据model自动创建表
module.exports = app => {
    app.beforeStart(async()=>{
        await app.model.sync({ force: false });
    });
    app.router.redirect('/', '/swagger-ui.html', 302);   // 配置 swagger 默认首页
};
