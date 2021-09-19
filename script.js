const data=[

    {

        imgSrc:"./images/rosa.png",
        listTitle:"Buket Love Rose",
        description:"Gullar tilida atirgul ishonchni bildiradi. Ularni nafaqat o'ziga, balki his -tuyg'ulariga ham ishongan odamlar tanlaydi.",
        price:"300000 so'm",
        btnSrc: "./images/strelka.svg",
        orderBtn:"buyurtma berish"

    },
      {

        imgSrc:"./images/ramashka.png",
        listTitle:"Buket Chamomile",
        description:"Romashka - noyob o'simlik, quyoshga o'xshash gul (sariq disk va barglari yon tomonlarga yoyilgan), ildizlari asrlarga cho'zilgan.",
        price:"200000 so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"
    },
      {

        imgSrc:"./images/tulip.png",
        listTitle:"Buket for Lady",
        description:"Bu mag'rur gul moslashuvchan va xarizmatik tabiatning yoqimtoyidir, ular kerak bo'lganda har qanday odamga yondashuv topadilar. Shiningdek , har qanday tabiatli ayolni o'ziga rom qila oladi.Onaningiz va ayolingizga bu gullardan harid qilishni unutmang   ",
        price:"15000 so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"

    },
      {

        imgSrc:"./images/lola.png",
        listTitle:"Buket Tulip",
        description:"Gullar tilida lola sevgi izhorini anglatadi va ehtirosli muhabbat ramzi lolalar hisoblanadi.Lolalar bilan bezatilgan ushbu buket ,oppoq libosli kelin qo'llarida yanayam ko'rkli bo'ladi.Harid qilishga eng mos gullar",
        price:"220000so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"

    }, {

        imgSrc:"./images/purple.png",
        listTitle:"Buket Purple Tulips",
        description:"PURPLE LOLALAR - BU NIMANI ANGLATADI? SADOQATNING RAMZI SIFATIDA BINAFSHA LIBOSLARNING GULDASTASI. QAYSI RANGLAR LOLALAR - QIZIL, SARIQ, OQ, PUSHTI, BINAFSHA VA HATTO KO'K.",
        price:"180000 so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"

    },
      {

        imgSrc:"./images/sweets.png",
        listTitle:"Buket Chocolate",
        description:" Shirin kompozitsiyaning shubhasiz afzalligi, chunki nodir ayol gullardan yasalgan guldastani olish bilan maqtana oladi. Bu guldasta odatdagi guldasta versiyasidan farqli o'laroq, ikki kun ichida yo'qolmaydi. U xohlagancha egasini xursand qiladi, bergan odamni eslatib turadi",
        price:"250000so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"
    },
      {

        imgSrc:"./images/simple.png",
        listTitle:"Buket Simple",
        description:"Oddiy, lekin chiroyli guldasta. Chiroyli, o'ziga xos va g'ayrioddiy kviling va yangi gullarning kompozitsiyalari.Oddiylikni hush ko'ruvchilar uchun oddiy tuhfa ",
        price:"70000so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"

    },
      {

        imgSrc:"./images/liliya.png",
        listTitle:"Buket LiliBiuty",
        description:"Tug'ilgan kun - gul berish uchun ajoyib sabab! Ularning xushbo'y hidi chiroyli, yorqin, ajoyib .Yosh ko'ngil sohibalari uchun ajoyib liliyali tuhfa. ",
        price:"150000so'm",
        btnSrc: "./images/strelka.svg",
         orderBtn:"buyurtma berish"

    }
]

data.forEach((data)=>{
     let newLi = document.createElement("li");


   
    let img =document.createElement("img");
    let title = document.createElement("h2");
    let desc =document.createElement("p");
    let price =document.createElement("p");
    let btn =document.createElement("button");
    let btnImg=document.createElement('img');
    let orderLink=document.createElement('a')

    img.setAttribute('src', data.imgSrc);
    img.setAttribute('class', 'img_flowers')
    title.setAttribute('class', 'list_title')
    btn.setAttribute('class', 'btn');
    btnImg.setAttribute('src', data.btnSrc);
    btnImg.setAttribute('class', 'strelka_img')
    newLi.setAttribute('class', 'list_item');
    desc.setAttribute('class', 'description ');
    price.setAttribute('class', 'price');
    orderLink.setAttribute('href','#');
    orderLink.setAttribute('class', 'order_link');
    
    title.textContent=data.listTitle;
    price.textContent=data.price;
    desc.textContent=data.description;
    orderLink.textContent=data.orderBtn;

    btnImg.addEventListener('click',function(e){
        e.preventDefault();
        desc.classList.toggle('desc_block')
        btnImg.classList.toggle('strelka_top');
        orderLink.classList.toggle('order_block')
      
    })



    newLi.appendChild(img);
    newLi.appendChild(title);
    newLi.appendChild(desc);
    newLi.appendChild(price);
     newLi.appendChild(orderLink);
    newLi.appendChild(btn);
    btn.appendChild(btnImg)
    list.appendChild(newLi);
    console.log(newLi);
})