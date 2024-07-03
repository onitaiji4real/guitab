# 使用官方的 Node 鏡像
FROM node:20

# 設定工作目錄
WORKDIR /usr/src/app

# 複製 package.json 與 package-lock.json 以達到最佳效能
COPY package*.json ./

# 安裝相依套件
RUN npm install

# 複製所有檔案到容器中
COPY . .

# # 建置前端應用
# RUN npm run build

# 暴露前端應用的埠
EXPOSE 3000

# 運行應用
CMD ["npm", "start"]
