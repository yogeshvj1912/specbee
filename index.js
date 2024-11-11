
const datas = [
    {
        img:"images/john_doe _1.jpeg",
        name:"John Doe",
        position:"Chief Marketing Officer",
        company:"Acme Corp",
        detail:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
        img:"images/john_doe _2.jpeg",
        name:"John Doe",
        position:"Chief Marketing Officer",
        company:"Acme Corp",
        detail:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
        img:"images/john_doe_3.jpeg",
        name:"John Doe",
        position:"Chief Marketing Officer",
        company:"Acme Corp",
        detail:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
        img:"images/john_doe_4.jpeg",
        name:"John Doe",
        position:"Chief Marketing Officer",
        company:"Acme Corp",
        detail:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."

    },
]

let container = document.createElement("div")
container.setAttribute("class", "container");

let headingBox = document.createElement("div")
headingBox.setAttribute("class","heading-box")


let heading = document.createElement("h1")
heading.setAttribute("class", "block-heading");
heading.innerHTML = "View our Featured Speakers for the Event"
headingBox.append(heading)

let subHeading = document.createElement("p") 
subHeading.innerHTML = `Speakers are core contributors and industry thought leaders working at <span style="color: blue;">companies</span> that push for innovation.`;

headingBox.append(subHeading)


let detailComponent = document.createElement("div")
detailComponent.setAttribute("class","detail-component-hidden")

let showCard = document.createElement("div")
showCard.setAttribute("class","block-show-card")


let leftButton = document.createElement("div")
leftButton.setAttribute("class","left-button")

let leftButtonImage = document.createElement("img")
leftButtonImage.setAttribute("src","./images/left.png")
leftButton.append(leftButtonImage) 
showCard.append(leftButton)

datas.forEach((data,i)=>{
    let card = document.createElement("div")
    card.setAttribute("class","speaker-card")
    card.onclick = ()=>{
        detailComponent.innerHTML=""
        detailComponent.setAttribute("class","detail-component-visible")

     let detailBox = document.createElement("div")
        detailBox.setAttribute("class","detail-box")

     let boxDetail1 = document.createElement("div")
     boxDetail1.setAttribute("class","box-detail-1")
     
     let boxDetailImage = document.createElement("img")
     boxDetailImage.setAttribute("class","box-detail-image")
     boxDetailImage.setAttribute("src",data.img)

     let boxDetailInfo = document.createElement("div")
     boxDetailInfo.setAttribute("class","box-detail-info")

     let nameDetail = document.createElement("h2")
     nameDetail.innerHTML = data.name
     
     let positionCompany = document.createElement("div")
     positionCompany.setAttribute("class","position-company")
    
     let positionDetail = document.createElement("h4")
     positionDetail.innerHTML = data.position
     let companyDetail = document.createElement("p")
     companyDetail.innerHTML = data.company

     let iconsBox = document.createElement("div")
     iconsBox.setAttribute("class","icons-box")
     
     let iconImage1 = document.createElement("img")
     iconImage1.setAttribute("src","./images/icon1.png")
     let iconImage2 = document.createElement("img")
     iconImage2.setAttribute("src","./images/icon2.png")
     let iconImage3 = document.createElement("img")
     iconImage3.setAttribute("src","./images/icon3.png")
     

    
     let boxDetail2 = document.createElement("div")
     boxDetail2.setAttribute("class","box-detail-2")
     boxDetail2.innerHTML = data.detail


     let closeBox = document.createElement("div")
     closeBox.setAttribute("class","close-box")
     closeBox.innerHTML=`<img src="./images/close.png">`
     closeBox.onclick = ()=>{
        detailComponent.setAttribute("class","detail-component-hidden")
     }
     iconsBox.append(iconImage1,iconImage2,iconImage3)
     positionCompany.append(positionDetail,companyDetail)
     boxDetailInfo.append(nameDetail,positionCompany,iconsBox)
     boxDetail1.append(boxDetailImage,boxDetailInfo)
     detailBox.append(boxDetail1,boxDetail2)
     detailComponent.append(closeBox,detailBox)
    }

    let img_div = document.createElement("div")
    img_div.setAttribute("class","img-div")
    let img = document.createElement("img")
    img.setAttribute("src",data.img)
    img_div.append(img)

    let name = document.createElement("h3")
    name.innerHTML=data.name

    let position = document.createElement("h5")
    position.innerHTML = data.position
   
    let company = document.createElement("p")
    company.innerHTML = data.company
    card.append(img_div,name,position,company)

 showCard.append(card)
})
let rightButton = document.createElement("div")
rightButton.setAttribute("class","right-button")


let rightButtonImage = document.createElement("img")
rightButtonImage.setAttribute("src","./images/right.png")
rightButton.append(rightButtonImage)
showCard.append(rightButton)

let programButton = document.createElement("button")
programButton.setAttribute("class","program-button")
programButton.innerHTML = "See the Program"

container.append(headingBox,detailComponent,showCard,programButton)
document.body.append(container); 