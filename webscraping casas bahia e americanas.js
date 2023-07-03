
const prompt= require('prompt-sync')();

const fs = require('fs');
      aah= fs.readFileSync('index.html','utf8');
      console.log(aah);

const puppeteer=require('puppeteer');


const aaj=prompt('qual o produto?');
  


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

      for (var a = 0; a <2; a++) {
if (a==0) {
  link1='https://www.casasbahia.com.br/';
  link2='/b';
}if (a==1) {
  link1='https://www.americanas.com.br/busca/';
  link2='';
}
  
  

    await page.goto(link1+aaj+link2,{waitUntil:'load'});
  
    for (let i = 0; i < 200; i++) {
        await page.keyboard.down('ArrowDown');
        
    }
    let varia=a;
    const textContent = await page.evaluate(({varia,lista,lista2,listas,obj1,obj2}) => {
        
for (let i = 1; i <10; i++) {
console.log(varia);
       if (varia==0) {
        try{
          let aa=document.querySelector('#__next > div.Loader__Wrapper-sc-1hj1bdl-0.iPmbxy > div > div > div.Row-sc-12954vt-0.pages__RowHasResults-sc-4fgpoh-1.deprhG.iNVDpd > div.Grid-sc-8nmas1-0.fXMnEX > div > section > ul > li:nth-child('+i+') > div > div.ProductCard__CardContent-sc-2vuvzo-4.clsbCQ > a').innerText;
         
          let ab= document.querySelector("#__next > div.Loader__Wrapper-sc-1hj1bdl-0.iPmbxy > div > div > div.Row-sc-12954vt-0.pages__RowHasResults-sc-4fgpoh-1.deprhG.iNVDpd > div.Grid-sc-8nmas1-0.fXMnEX > div > section > ul > li:nth-child("+i+") > div > div.ProductCard__CardMedia-sc-2vuvzo-8.iSythp > a > div > img").getAttribute('src');
          
          
          obj1={numero:i,nome:aa,foto:ab};
          lista.push(obj1);
        }
        catch(err){
          return 'erro';
                  }
       //console.log(lista);
        
      }
        

        if (varia==1) {
          try{
            //let aa=(document.querySelector("#rsyswpsdk > div > main > div > div.col__StyledCol-sc-1snw5v3-0.bIoTYC.search-result__ColUI-sc-tokhek-4.bzmAQK > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP.src__GridItem-sc-122lblh-0.gGJHBq > div:nth-child("+i+") > div > div > a > div.product-info__Wrapper-sc-1or28up-2.iKCquI.inStockCard__ProductInfoUI-sc-1ngt5zo-4.bUaEFE > div.product-info__Container-sc-1or28up-0.cdKgxb > h3").innerText)
          let aa=(document.querySelector("#rsyswpsdk > div > main > div > div.col__StyledCol-sc-1snw5v3-0.bIoTYC.full-grid__ColUI-sc-19t7jwc-9.iIVCOo > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP.src__GridItem-sc-122lblh-0.gGJHBq > div:nth-child("+i+") > div > div > a > div.product-info__Wrapper-sc-1or28up-2.iKCquI.inStockCard__ProductInfoUI-sc-1ngt5zo-4.bUaEFE > div.product-info__Container-sc-1or28up-0.cdKgxb > h3").innerText)+document.querySelector("#rsyswpsdk > div > main > div > div.col__StyledCol-sc-1snw5v3-0.bIoTYC.search-result__ColUI-sc-tokhek-4.bzmAQK > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP.src__GridItem-sc-122lblh-0.gGJHBq > div:nth-child("+i+") > div > div > a > div.price-info__Wrapper-sc-1xm1xzb-0.clqFWq.inStockCard__PriceInfoUI-sc-1ngt5zo-3.ciWwot").innerText;
          let ab=document.querySelector("#rsyswpsdk > div > main > div > div.col__StyledCol-sc-1snw5v3-0.bIoTYC.search-result__ColUI-sc-tokhek-4.bzmAQK > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP.src__GridItem-sc-122lblh-0.gGJHBq > div:nth-child("+i+") > div > div > a > div.image-info__Wrapper-sc-1xptwuk-0.kEjebN.inStockCard__ImageInfoUI-sc-1ngt5zo-2.krRZyq > div > div > picture > img").getAttribute('src');
          
          obj2={numero:i,nome:aa,foto:ab}
          lista.push(obj2);
        }
        catch(err){
return 'erro';
        }
        }
        

        
       // lista.push(obj);
        
        //lista2.push(obj2);
//listas.push(lista);
//listas.push(lista2);
          //lista2.push(ab); 
       //lista.push(aa); 
//listas.push(obj);
//listas.push(obj2);


//console.log(lista2);


    }
//listas.push(lista);


    console.log(listas);
   return lista;
   

    },{varia,lista,lista2,listas,obj1,obj2})
   
  console.log(textContent);
  //lista.push(lista2);
  fs.writeFile('html'+a+'.json',JSON.stringify(textContent,null,2),err=>{
    if(err) throw new Error('erro')
  console.log('certo');
  })
  


  }

  //browser.close();    //console.log(listas);
            
       
}

automateSearch()



