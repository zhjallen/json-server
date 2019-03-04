const router = {
    "routers": [
        {
            "id": 1,
            "userId": 1,
            "menus": [
                {
                    "name": "权限管理",
                    "childrenRouters": [
                        {
                            "name": "用户管理",
                            "component": "userList",
                            "path": "/userList"
                        },
                        {
                            "name": "平台管理",
                            "component": "platformManage",
                            "path": "/platformManage"
                        }
                    ]
                }
            ]
        }
    ]
}
module.exports = router;