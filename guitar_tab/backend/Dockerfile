# 使用官方的 Python 鏡像
FROM python:3.8

# 安裝相關庫
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxrender1 \
    libxext6

# 設定工作目錄
WORKDIR /usr/src/app

# 複製 requirements.txt 以提前安裝相依套件，以達到最佳效能
COPY requirements.txt .

# 安裝相依套件
RUN pip install --no-cache-dir -r requirements.txt

# 複製所有檔案到容器中
COPY . .

# 暴露後端應用的埠
EXPOSE 8877

# 運行應用
CMD ["python", "backend.py"]
