// import logo from './logo.svg';

// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './scss/main.scss'
// import './scss/input_text.scss'
import axios from './api/axiosApi';
import { useEffect, useState } from 'react';
import CanvasWithBackground from './component/CanvasWithBackground'; 
import BackgroundModal from './component/BackgroundModal';
import io from 'socket.io-client'; 

import './scss/Execute.scss'
import BackgroundModalError from './component/BackgroundModalError';



export default function Execute() {
  const [ytUrl,setYtUrl] = useState("");
  const [ytTitle,setYtTitle] = useState("");
  const [ytImageUrl,setYtImageUrl] = useState("");
  const [rectangle,setRectangle] = useState(null);
  const [tabImageUrl,setTabImageUrl] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [tabPage,setTabPage] = useState([]);
  const [fullTab,setFullTab] = useState([]);
  const [error, setError] = useState(null);



  const urlUpdate = async (data) => {
    try{
      const Data = await axios.post("/api/yt_url",data);
      if (Data.status === 200){
        console.log("yturl",Data.data);
        setYtTitle(Data.data);
        getGuitarImage();
    }
    }catch(error){
      setError('URL異常，影片可能為年齡限制影片');
      setIsLoading(true);
    }
    
    
  };
  const getGuitarImage = async () => {
    console.log("getGuitarImage ");
    const Data = await axios.get("/api/yt_image",{ responseType: 'arraybuffer' });
    if (Data.status === 200){
      console.log("image is here");
      const base64 = btoa(new Uint8Array(Data.data).reduce((data,byte)=>data + String.fromCharCode(byte),''))
      const imageUrl = `data:image/jpeg;base64,${base64}`; // 創建圖像URL
      setYtImageUrl(imageUrl)
    }
  }
  

  // 須等待到圖片運算完
  const postImageArea = async (data) => { 
    setIsLoading(true);
    const Data = await axios.post("/api/image_area_select",data);
    if (Data.status === 200) {
      for (let i = 0; i < (Data.data).length; i++){
        const base64ToImage = `data:image/jpeg;base64,${Data.data[i]}`;
        setTabImageUrl(oldArray => [...oldArray, base64ToImage]);
      }
      setIsLoading(false);
      
      console.log("Data => ",(Data.data).length);
      console.log("TabImage is  : ",tabImageUrl);
      
    }
  }
 


  



  const postTabPage = async(data) =>{
    try{
      const Data = await axios.post("/api/tab_select",data);
      if (Data.status === 200) {
        console.log("tab selected");
        for (let i = 0; i < (Data.data).length; i++){
          const fullBase64ToImage = `data:image/jpeg;base64,${Data.data[i]}`;
          setFullTab(oldArray => [...oldArray, fullBase64ToImage]);
        }
      }
    }catch(error){
      setError('吉他譜TAB生成異常');
      setIsLoading(true);
    }
  };
  // useEffect(() => { #websocket
  //   const socket = io('http://0.0.0.0:8877');  // 连接到后端的 WebSocket 服务器地址

  //   // 监听来自后端的 WebSocket 消息
  //   socket.on('message_from_backend', (data) => {
  //     const receivedMessage = data.message;
  //     // 在这里处理接收到的消息，例如更新状态或执行其他逻辑操作
  //     console.log("----------------->>>>>>>>>>>",receivedMessage);
  //   });

  //   // 在组件卸载时断开 WebSocket 连接
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);  // [] 表示仅在组件挂载和卸载时运行一次

 
  return (
        // <div className="main-page-2">
        <div className={`main-page-2 ${tabImageUrl.length !== 0 ? "tab-select":""}`}>
          { error ? 
          <BackgroundModalError 
          setIsLoading={setIsLoading} 
          error={error} 
          setError={setError} 
          isLoading={isLoading}/> 
          : 
          isLoading  ? 
          <BackgroundModal isLoading={isLoading}/>  : ""}
        {/* <div className={`main-page ${isLoading ? "loading":""}`}> */}
          {/* <div className="data-area"> */}
          <div className={`data-area ${ytTitle.length === 0 ? "before-url" : "after-url"}`}>
            <div className="data-URL">
            {ytTitle.length === 0 ? (
                <div className='before-url'>
                    <h1>step 1.</h1>
                    <hr/>
                    <p>請輸入要查詢的影片網址</p>
                    <div className="form-outline">
                    <input type="url" id="typeURL" placeholder="Youtube URL" className="form-control" onChange={(event) => { setYtUrl(event.target.value) }} />
                    <button className="url-btn btn btn-primary " type="submit" onClick={() => urlUpdate(ytUrl)}>執行</button>
                    </div>
                </div>
                ) : (
                <div className='after-url'>
                    {tabImageUrl.length !==0 ? <h1>step 3.</h1>:<h1>step 2.</h1>}
                    <hr/>
                    <div className='text-space'>
                      {tabImageUrl.length !==0 ? <p>勾選需要的吉他譜 TAB</p>:<p>請框取吉他譜的區域</p>}
                    </div>
                    <div className="form-outline">
                    <h3>{ytTitle}</h3>
                    
                    
                    </div>
                </div>
            )}
              
              
            </div>

              {ytImageUrl && tabImageUrl.length === 0? 
              <div className="image-display">
                <CanvasWithBackground imageUrl = {ytImageUrl} rectangle={rectangle} setRectangle={setRectangle}> 
                </CanvasWithBackground>
                <button class="btn btn-primary" type="submit" onClick={()=>postImageArea(rectangle)}>確認</button>
              </div>
              :
              ""
              }
              
              {tabImageUrl.length !== 0 ? 
                <div className="tab-select">
                {tabImageUrl && tabImageUrl.map((data,index)=>(
                  <div className='tab-images'>
                    <input type='checkbox' 
                      defaultChecked={true} 
                      value={index} 
                      onChange={(e)=>(e.target.checked === true ? 
                      setTabPage((pre)=>pre.filter(prev=>prev !== index)):
                      setTabPage(oldArray => [...oldArray, index]))}>
                      {/*遍歷數組（或類似數據結構）的每個元素，並返回滿足特定條件的元素所組成的新數組*/}
                    </input>
                    <img src={tabImageUrl[index]} alt="Image1" />
                    
                  </div>
                  
                ))}
                <button class="btn btn-primary" type="submit" onClick={()=>postTabPage(tabPage)}>確認</button>
              </div>
              :
              ""
              }
              

              {fullTab.length !== 0 ? 
                <div className="full-tab">
                {fullTab && fullTab.map((data,index)=>(
                  <div className='tab-images'>
                    <img src={fullTab[index]} alt="Image2" />
                   </div>
                ))}
                
              </div>
              :
              ""
              }
              
            
          </div>
        </div>
  );
}


