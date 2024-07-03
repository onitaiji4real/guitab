# GuiTab

GuiTab 是一個網頁應用程序，根據用戶提供的 YouTube 影片 URL（必須包含吉他譜）自動生成完整的吉他譜。用戶可以輸入 YouTube 影片 URL，選擇所需的譜區域，系統將返回完整的吉他譜。
這個 GuiTab 專案使用 Docker Compose 來方便地啟動 Guitab 的前後端。

## **目錄**

- 介紹
- 用戶需求
- 主要特點
- 技術實現
  - 前端（React）
  - 後端（Flask）
  - 圖片處理
- 整體流程
- 入門指南
- 結論

## **介紹**

GuiTab 簡化了從 YouTube 影片中獲取吉他譜的過程。用戶可以方便地輸入 YouTube 影片 URL，選擇所需的譜區域，系統將自動為他們選定的影片部分生成完整的吉他譜。

## **用戶需求**

用戶希望能夠以快速簡便的方式從 YouTube 影片中獲取吉他譜，而無需進行手動的繁瑣流程。吉他譜生成器提供直觀的界面，包括影片輸入、TAB 區域選擇和 TAB 生成，用戶能夠輕鬆地獲得他們感興趣的影片部分的吉他譜。

## **主要特點**

1. **輸入 YouTube 影片 URL**
   - 用戶可以在主頁上提供的輸入框中輸入 YouTube 影片 URL，系統將自動提取影片標題並捕獲一個截圖。
2. **選擇譜區域**
   - 系統顯示提取的影片截圖，允許用戶選擇他們感興趣的譜區域——影片的吉他譜部分。
3. **生成吉他譜**
   - 在選擇了 TAB 區域之後，系統處理圖片，提取吉他譜，並將生成的 TAB 以圖片的形式顯示在網頁上。

## **技術實現**

### **前端（React）**

- 使用 React 框架構建。
- 使用 Axios 處理向後端的 HTTP 請求。
- 實現 Canvas 和背景模糊效果，用於顯示影片截圖。
- 提供直觀的用戶界面，包括影片輸入、TAB 區域選擇和 TAB 生成。

### **後端（Flask）**

- 使用 Flask 框架開發後端服務器。
- 使用 PyTube 從 YouTube 影片獲取信息。
- 使用 OpenCV 進行圖片處理，提取指定的 TAB 區域。
- 將圖片轉換為 Base64，以便在前端輕松顯示。

### **Docker 部屬**

- 透過 Docker 實現應用程式的容器化部署，確保在不同環境中的一致性。
- 使用 Docker Compose 簡化多容器應用程式的管理。

### **圖片處理**

- 使用 OpenCV 進行圖片處理。
- 通過識別吉他譜的變化來提取影片的指定 TAB 區域。

## **整體流程**

1. **用戶在前端輸入 YouTube 影片 URL**
   - 用戶在前端輸入 YouTube 影片 URL，觸發後端處理。
2. **後端處理 YouTube 影片信息**
   - 後端使用 PyTube 獲取影片標題和截圖。
3. **前端顯示影片截圖**
   - 前端顯示 YouTube 影片的截圖，提供交互式界面。
4. **用戶在前端選擇 TAB 區域**
   - 用戶在影片截圖上選擇感興趣的 TAB 區域，觸發後端處理。
5. **後端進行圖片處理**
   - 後端使用 OpenCV 處理選定的 TAB 區域，提取吉他譜。
6. **前端顯示生成的 TAB**
   - 後端生成吉他譜，將其轉換為 Base64，並在網頁上顯示。
7. **用戶獲得吉他譜**
   - 用戶成功獲得生成的吉他譜，完成整個流程。

## **使用方法**

要開始使用吉他譜生成器，請按照以下步驟進行：

### **步驟 1: 安裝 Docker 和 Docker Compose**

確保你的機器上已經安裝了 Docker 和 Docker Compose。如果沒有，請參考以下鏈接進行安裝：

- [Docker 安裝指南](https://docs.docker.com/get-docker/)
- [Docker Compose 安裝指南](https://docs.docker.com/compose/install/)

### **步驟 2: 下載 Guitab 專案**

使用以下命令 clone Guitab 專案：

```bash
git clone https://github.com/onitaiji4real/guitab.git
```

### **步驟 3: 進入 Guitab 目錄**

```bash
cd guitab
```

### **步驟 4: 啟動 Docker Compose**

執行以下命令啟動 Docker Compose：

```bash
docker-compose up -d
```

### **步驟 5: 查看應用程式**

現在，你的 Guitab 應用程式應該已經運行在:

- 前端: [http://localhost:3000](http://localhost:3000/)

你可以使用網頁瀏覽器訪問上述 URL 來查看應用程式，並輸入 YouTube 影片 URL。

### **步驟 6: 關閉 Docker Compose**

當你完成測試後，可以使用以下命令關閉 Docker Compose：

```bash
docker-compose down
```

## **結論**

GuiTab 為用戶提供了一種直觀高效的方式，讓他們能夠從 YouTube 影片中獲取吉他譜。
