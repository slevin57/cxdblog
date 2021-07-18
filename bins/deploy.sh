
#!/usr/bin/env sh
#--------------------------------------------
# 打包后将生成的静态文件push到远程仓库的ghpages分支
# author：pc
#--------------------------------------------

# 用来发布repopage
remote='git@github.com:slevin57/cxdblog.git'
# 用来发布userpage
# remote='git@github.com:slevin57/slevin57.github.io.git'

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 把CNAME文件放到dist目录
cp CNAME docs/.vuepress/dist

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 也可以直接用这个命令：git push -f $remote master:ghpages

git remote add origin $remote
git push -f origin ghpages

cd -
