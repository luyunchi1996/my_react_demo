# 基础镜像为node
FROM node:10.15.3
# 镜像作者，可以附加联系信息
MAINTAINER chi

# 创建容器内的项目存放目录
RUN mkdir -p /home/umiapp
WORKDIR /home/umiapp

#  将Dockerfile当前目录下所有文件拷贝至容器内项目目录并安装项目依赖
COPY . /home/Service
RUN npm install -g yarn
RUN yarn install 

# 容器对外暴露的端口号，要和node项目配置的端口号一致
EXPOSE 8000

# 容器启动时执行的命令
CMD [ "yarn", "start" ]