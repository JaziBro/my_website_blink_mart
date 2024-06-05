import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let kitchenData = [
            {
                _id: 5,
                image: "../../public/frying_pan.jpeg",
                name: "Sonex Non Stick Fry Pan 22cm",
                price: "Rs. 1,000 ",
            },
            {
                _id: 6,
                image: "../../../public/milk_pan.jpeg",
                name: "Sonex Non Stick Classic Milk Pan",
                price: "Rs. 1,200",
            },
            {
                _id: 25,
                image: "../../../public/lighter.jpeg",
                name: "Spark Lighter | Electronic Stove Lighter - Kitchen Gas Stove Lighter| Stainless Steel",
                price: "Rs. 500",
            },
            {
                _id: 26,
                image: "../../../public/spoons.webp",
                name: "Pack of 3 - Pieces Wooden Nonstick Spoon Set - Kitchen Cooking Utensils Non Stick Wood Kitchen Tools",
                price: "Rs. 250",
            },
            {
                _id:27 ,
                image: "../../../public/container.jpg",
                name: "Lock Air Tight Rectangular Tall Food Container",
                price: "Rs. 1,500",
            },
        ]
    return NextResponse.json({message: "API Succesful",kitchenData}) 
}
