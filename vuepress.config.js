module.exports = {
    lang: 'zh-CN',
    title: '你好， vp ！',
    description: '这是我的第一个 VuePress 站点',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: [
            // SidebarItem
            {
                text: 'Foo',
                link: '/foo/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    '/foo/bar.md',
                ],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
        navbar: [
            // 嵌套 Group - 最大深度为 2
            {
                text: 'Group',
                children: [
                    {
                        text: 'SubGroup',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                ],
            },
            // 控制元素何时被激活
            {
                text: 'Group 2',
                children: [
                    {
                        text: 'Always active',
                        link: '/',
                        // 该元素将一直处于激活状态
                        activeMatch: '/',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                        // 该元素在当前路由路径是 /foo/ 开头时激活
                        // 支持正则表达式
                        activeMatch: '^/foo/',
                    },
                ],
            },
        ],
        darkMode: true
    },

    // base: '/cxdblog/',
}
