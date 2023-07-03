
const prompt= require('prompt-sync')();

const fs = require('fs');
      aah= fs.readFileSync('index.html','utf8');
      console.log(aah);

const puppeteer=require('puppeteer');


//const aaj=prompt('qual o produto?');
  


 async function automateSearch() {

 


    //var lista12=[];
    
    const browser=await puppeteer.launch({headless: false, args:['--start-maximized']});
    
    const page= await browser.newPage();
    await page.setViewport({
        width: 1600,
        height: 800,
        deviceScaleFactor: 1,
      });

obj1={};
obj2={};

      lista=[];
        lista2=[];
        listas=[];

      
  link1='https://www.instagram.com/xxx';

  

    await page.goto(link1,{waitUntil:'load'});
  
    
    
    const textContent = await page.evaluate(({}) => {
        
      aac=document.getElementsByClassName('_ac2a')
      seguidores=aac[1].innerText
      seg=seguidores-1
      seguindo=aac[2].innerText
      segui=seguindo-1
      console.log(seguidores)
      console.log(seguindo)
      
      aad=document.getElementsByClassName('_ac2a')
      aad[1].click()
      
      //_aacl _aaco _aacw _aacx _aad7 _aade
      //ver quem segue 
          const parara =setInterval(ultimoa,2000)
          lista1=[];
           function ultimoa(){
              aa=document.getElementsByClassName('x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1')
          for (let i = 0; i < aa.length; i++) {
              lista1.push(aa[i].innerText)
              //console.log(i)
              //console.log(lista1[i]) 
               aa[i].scrollIntoView()
              if (i>=seg){
                  pareer(lista1)
              }
          }
      }
      function pareer(l1){
          clearInterval(parara)
      //console.log('abv')
      for(let o=0; o<l1.length;o++){
         console.log(l1[o])
      }
      lista3={}
      for (var k=0;k<l1.length;k++)
      {lista3[l1[k]]=l1[k];}
      arr=[]
      for(var key in lista3){
          arr.push(key)
      }
      //console.log(arr)
      
      
      aag=document.getElementsByClassName('_abl-')
      aag[1].click()
      aae=document.getElementsByClassName('_ac2a')
      aae[2].click()
      
      
      
      
      const pararab =setInterval(ultimob,2000)
          lista2=[];
          function ultimob(){
              aaa=document.getElementsByClassName('x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1')
          for (let i = 0; i < aaa.length; i++) {
              lista2.push(aaa[i].innerText)
              //console.log(i)
              //console.log(lista1[i]) 
              aaa[i].scrollIntoView()
              if (i>=segui){
                  pareerb(lista2)
              }
          }
      }
      function pareerb(l2){
          clearInterval(pararab)
      console.log('abv')
      for(let o=0; o<l2.length;o++){
          console.log(l2[o])
      }
      aag=document.getElementsByClassName('_abl-')
      aag[1].click()
      
      lista4={}
      for (var ka=0;ka<l2.length;ka++)
      {lista4[l2[ka]]=l2[ka];}
      arre=[]
      for(var keyr in lista4){
          arre.push(keyr)
      }
      lista5=[]
      console.log(arr.length)
      console.log(arre.length)
      
      for (let a = 0; a < arre.length; a++) {
      const found= arr.find(element=>element===arre[a])
          if (found==undefined) {
              lista5.push(arre[a])
          }
      
      }
      for (let l = 0; l < lista5.length; l++) {
          console.log(lista5[l])
          
      }
      
      }
      }
   

    },{})
   
  console.log(textContent);
  //lista.push(lista2);
  fs.writeFile('html.json',JSON.stringify(textContent,null,2),err=>{
    if(err) throw new Error('erro')
  console.log('certo');
  })
  


  }

  browser.close();    //console.log(listas);
            
       


automateSearch()



