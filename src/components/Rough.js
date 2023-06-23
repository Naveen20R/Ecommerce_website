import React from 'react'

const heading = {
    color: 'blue',
    textAlign: 'center',
}
const image = {
    width: 'auto',
    height: "20vh",
    ObjectFit: 'contain',
    backgroundSize: 'cover'

}
const card = {
    color: "red",
    height: '25em',
    textAlign: 'justify'

}


const Cont = ({ itemImage1, itemTitle1, itemContent1, itemImage2, itemTitle2, itemContent2, itemImage3, itemTitle3, itemContent3, itemImage4, itemTitle4, itemContent4, itemImage5, itemTitle5, itemContent5 }) => {
    return (

        <div>
            <div><h3 style={heading}>Rough.js File</h3> </div>
            <div class="row row-cols-1 row-cols-md-5 g-4">
                <div class="col"  >
                    <div class="card " style={card}>
                        <img style={image} src={itemImage1} />
                        <div class="card-body">
                            <h2 class="card-title" id='c'>{itemTitle1}</h2>
                            <p class="card-text">{itemContent1}</p>
                        </div>
                    </div>
                </div>
                <div class="col" >
                    <div class="card  " style={card}>
                        <img style={image} src={itemImage2} />
                        <div class="card-body">
                            <h5 class="card-title" id='c'>{itemTitle2}</h5>
                            <p class="card-text">{itemContent2}</p>
                        </div>
                    </div>
                </div>
                <div class="col" >
                    <div class="card  " style={card}>
                        <img style={image} src={itemImage3} />
                        <div class="card-body">
                            <h5 class="card-title" id='c'>{itemTitle3}</h5>
                            <p class="card-text">{itemContent3}</p>
                        </div>
                    </div>
                </div>
                <div class="col" >
                    <div class="card  " style={card}>
                        <img style={image} src={itemImage4} />
                        <div class="card-body">
                            <h5 class="card-title" id='c'>{itemTitle4}</h5>
                            <p class="card-text">{itemContent4}</p>
                        </div>
                    </div>
                </div>
                <div class="col" >
                    <div class="card " style={card}>
                        <img style={image} src={itemImage5} />
                        <div class="card-body">
                            <h5 class="card-title" id='c'>{itemTitle5}</h5>
                            <p class="card-text">{itemContent5}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

function Rough() {
    return (
        <div>
            <Cont
                itemName1="FOGG" itemImage1="./beauty/fogg.jpg" itemTitle1='Fogg' itemContent1="Phileas Fogg, fictional character, a wealthy, eccentric Englishman who wagers that he can travel around the world in 80 days in Jules Verne's novel Around the World in Eighty Days (1873). This article was most recently revised and updated by Kathleen Kuiper."
                itemName2="FOGG" itemImage2="./beauty/eyebrowTools.jpg" itemTitle2='EYE BROW TOOLS' itemContent2="This designed and stylish eyebrow remover is portable, light weighted, small enough to keep it in your handbag, bag or clutch at all time."
                itemName3="FOGG" itemImage3="./beauty/lipstick.jpg" itemTitle3='LIPSTICK' itemContent3="Lipstick is a cosmetic product used to apply coloration and texture to lips, often made of wax and oil. Different pigments are used to produce color, and minerals such as silica may be used to provide texture."
                itemName4="FOGG" itemImage4="./beauty/makeupBrush.jpg" itemTitle4='MAKEUP BRUSH' itemContent4="A makeup brush is a tool with bristles, used for the application of makeup or face painting."
                itemName5="FOGG" itemImage5="./beauty/makeupKit.jpg" itemTitle5='MAKEUP KIT' itemContent5="a complete makeup kit consists of a moisturizer, skin tint (like foundation or tinted primer), concealer, lip product, bronzer, blush, and mascara."
            />
        </div>
    )
}

export default Rough
