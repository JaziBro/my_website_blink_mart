import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let homedecoreData = [
            {
                _id: 9,
                image: "../../../public/plants.jpeg",
                name: "Pack of 6 Mini Artificial Plant Decoration Piece with pot",
                price: "Rs. 300",
            },
            {
                _id: 21,
                image: "../../../public/poster2.webp",
                name: "Pakistan Cricket Team T20 World Cup 2022 | Cricket Wall Art",
                price: "Rs. 3,000",
            },
            {
                _id: 22,
                image: "../../../public/poster.webp",
                name: "Ronaldo CR7 Charcoal Design | Football Wall Art",
                price: "Rs. 3,000",
            },
            {
                _id: 23,
                image: "../../../public/clock.webp",
                name: "High quality wooden wall clock | Flower shaped wall clock | flower shaped wooden wall clock",
                price: "Rs. 450",
            },
            {
                _id: 24,
                image: "../../../public/potrait.jpeg",
                name: "New flowers wall art wall art for home decore , gifts , kids room and for office , big size wall art ",
                price: "Rs. 400",
            },
        ]
    return NextResponse.json({message: "API Succesful", homedecoreData}) 
}
