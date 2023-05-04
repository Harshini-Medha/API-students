import React from 'react'
import gmail from './assets/gmail.png'

const Landing = () => {
  return (
    <section className='h-screen w-full flex flex-col justify-center items-center'>
     <img className='w-[350px] h-[250px] flex' src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"></img>
   <div className='w-[40%] h-[40px] flex justify-between items-center p-[10px] rounded-full shadow-md shadow-gray-500'>


   <i className=" hover:cursor-pointer  text-gray-500 fa-solid fa-magnifying-glass"></i>
    <input className='text-gray-600 placeholder-black outline-none w-[80%]' placeholder='Search Google or type a URL'/>
   <img className='w-[15px] h-[20px] hover:cursor-pointer' src="https://www.pngkit.com/png/detail/781-7815648_download-google-voice-assistant-icon.png"/>
   </div>

   <div className='w-[40%] h-[40%] flex flex-col justify-evenly items-center'>


    <span className='w-full h-[40%] flex justify-evenly items-center'>

      <span onClick={()=>location.href="https://youtube.com"} className='w-[16%] h-[90%] justify-center rounded-md  hover:bg-gray-100 hover:cursor-pointer items-center flex '>

        <span className='w-[60px] h-[60px] items-center flex justify-center bg-gray-200 rounded-full'>
      
          <a > <img className='' src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"/></a>
        </span>
      </span>
     
      <span onClick={()=>location.href="https://gmail.com"} className='w-[16%] h-[90%] justify-center rounded-md  hover:bg-gray-100 items-center flex hover:cursor-pointer  '>
        <span className='w-[60px] h-[60px] items-center flex justify-center bg-gray-200 rounded-full'>
     <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=Af_xneEuS21ALVf9BsMVLsWnAasU7k6R13UvlInJGQ6XuzpKX0AqZjMvpn4RTScQWgOTEmESktbE&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img src={gmail} alt="" /></a> 
        </span>
      </span>
      <span onClick={()=>location.href="https://ui.com"} className='w-[16%] h-[90%] justify-center rounded-md hover:bg-gray-100 items-center flex hover:cursor-pointer   '>
        <span className='w-[60px] h-[60px] items-center flex justify-center bg-gray-200 rounded-full'>
         <a href="https://account.uipath.com/login?state=hKFo2SBwYXc2SkNFdThQejVFNmJnYmJNSDE2eFpfd2NmNnl0a6FupWxvZ2luo3RpZNkgd0pPemg0elNfNnhtQ1RNQ25KV0EtNXpMeGMzX2RrYXCjY2lk2SAyeXQ5SGRGNDVPMDA2SDlxZFBjUDlhczVjZEdibkNXcw&client=2yt9HdF45O006H9qdPcP9as5cdGbnCWs&protocol=oauth2&audience=https%3A%2F%2Fuipath.eu.auth0.com%2Fapi%2Fv2%2F&scope=openid%20profile%20email%20read%3Acurrent_user%20update%3Acurrent_user_metadata&redirect_uri=https%3A%2F%2Fcloud.uipath.com%2Fportal_%2FauthCallback&type=login&ecommerceRedirect=false&redirectPath=&marketplaceRedirectUri=&retryUrl=%2Fportal_%2Fenterprisesso&product_name=UiPath%20Automation%20Cloud&company_code=B2B_CP&platform_name=UiPath%20Platform&enable_marketing_fields=true&cloudrpa_signup_subdomain=%2Fportal_&register_endpoint=%2Fregister&use_local_registration=false&response_type=code&response_mode=query&nonce=QTg2V2ZiX0NKVjlnS0YxZmpQeDVBcjNRUVgxQTJ5cUlCVTZMUV90a3J0cQ%3D%3D&code_challenge=MQNXhghJWVjX3s4-gaGptg7TiYFi7fFCo6_3DoS7kxw&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4yLjAifQ%3D%3D"><img className='rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjFziFuCO7YmYXMboTbnTk45B8LOn8mR3Ww&usqp=CAU"/></a>
        </span>
      </span>
    </span>


    <span className='w-full h-[40%] flex justify-evenly items-center'>
    <span className='w-[16%] h-[90%] justify-center rounded-md hover:bg-gray-100 items-center flex hover:cursor-pointer  '>
        <span className='w-[60px] h-[60px] items-center flex justify-center bg-gray-200 rounded-full'>
         <a href="https://account.uipath.com/login?state=hKFo2SBwYXc2SkNFdThQejVFNmJnYmJNSDE2eFpfd2NmNnl0a6FupWxvZ2luo3RpZNkgd0pPemg0elNfNnhtQ1RNQ25KV0EtNXpMeGMzX2RrYXCjY2lk2SAyeXQ5SGRGNDVPMDA2SDlxZFBjUDlhczVjZEdibkNXcw&client=2yt9HdF45O006H9qdPcP9as5cdGbnCWs&protocol=oauth2&audience=https%3A%2F%2Fuipath.eu.auth0.com%2Fapi%2Fv2%2F&scope=openid%20profile%20email%20read%3Acurrent_user%20update%3Acurrent_user_metadata&redirect_uri=https%3A%2F%2Fcloud.uipath.com%2Fportal_%2FauthCallback&type=login&ecommerceRedirect=false&redirectPath=&marketplaceRedirectUri=&retryUrl=%2Fportal_%2Fenterprisesso&product_name=UiPath%20Automation%20Cloud&company_code=B2B_CP&platform_name=UiPath%20Platform&enable_marketing_fields=true&cloudrpa_signup_subdomain=%2Fportal_&register_endpoint=%2Fregister&use_local_registration=false&response_type=code&response_mode=query&nonce=QTg2V2ZiX0NKVjlnS0YxZmpQeDVBcjNRUVgxQTJ5cUlCVTZMUV90a3J0cQ%3D%3D&code_challenge=MQNXhghJWVjX3s4-gaGptg7TiYFi7fFCo6_3DoS7kxw&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4yLjAifQ%3D%3D"> <img className='bg-gray-200 w-[30px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gxKrCByiXBtpZOwq_Hg9WylCXw1wU4FmKw&usqp=CAU"/></a>
        </span>
      </span>
      <span className='w-[16%] h-[90%] justify-center rounded-md hover:bg-gray-100 items-center flex hover:cursor-pointer '>
        <span className='w-[60px] h-[60px] items-center flex justify-center bg-gray-200 rounded-full'>
          <a href='https://chrome.google.com/webstore/category/extensions?hl=en'><img className='bg-gray-200 w-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png?20151104231050"/></a>
        </span>

      </span>
      <span className='w-[16%] h-[90%] justify-center rounded-md hover:bg-gray-100 items-center flex hover:cursor-pointer  '>
        <span className='w-[60px] h-[60px] items-center flex  text-gray-500 font-bold justify-center bg-gray-200 rounded-full'>
         <h1 className='text-[40px]'>+</h1> 
        </span>
      </span>
    </span>
   </div>
    </section>
  )
}

export default Landing