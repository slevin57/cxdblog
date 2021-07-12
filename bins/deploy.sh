
#!/usr/bin/env sh
#--------------------------------------------
# 打包后将生成的静态文件push到远程仓库的ghpages分支
# author：pc
#--------------------------------------------

remote='git@github.com:slevin57/cxdblog.git'

# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
yarn build
 
# 进入生成的文件夹
cd docs/.vuepress/dist
 
git init
git add -A
git commit -m 'deploy'
 
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f $remote master:ghpages

git remote add origin $remote
git push -u origin ghpages
 
cd -