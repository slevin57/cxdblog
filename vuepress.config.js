module.exports = {
     // base: '/cxdblog/',
    lang: 'zh-CN',
    title: '你好， vp ！',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: 'http://qiniu.cuixiaodao.com//20210719230855.png' }]],
    themeConfig: {
        logo: 'http://qiniu.cuixiaodao.com//20210719230855.png',
        navbar:[
            {text:'导航1', link:'/aaa/'},
            {
                text: 'Group',
                children:['a1.md','b1.md']
            },
            'aa.md'
        ],
        // 所有页面会使用相同的侧边栏
        // sidebar: [
        //     // SidebarItem
        //     {
        //         text: 'Foo',
        //         link: '/aa/',
        //         children: [
        //             // SidebarItem
        //             {
        //                 text: 'github',
        //                 link: 'https://github.com',
        //                 children: [],
        //             },
        //             // 字符串 - 页面文件路径
        //             '/foo/bar.md',
        //         ],
        //     },
        //     // 字符串 - 页面文件路径
        //     'aa.md',
        // ],
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
            '/aa/': [
                {
                    text: 'Guide',
                    children: ['/guide/README.md', '/guide/getting-started.md'],
                },
            ],
            '/reference/': [
                {
                    text: 'Reference',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        },
        sidebarDepth: 2
    },
    markdown:{
        extractHeaders: {
            level:[4, 5]
        }
    }
}
