import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let StationaryData = [       
            {
                _id: 8 ,
                image: "../../public/pen_holder.jpeg",
                name: "Pen Stand Round Stand Round Jar - Stationary Holder",
                price: "Rs. 300 ",
            },
            {
                _id: 7,
                image: "../../../public/notebook.jpeg",
                name: "Subject Notebook ",
                price: "Rs. 300",
            },
            {
                _id: 28,
                image: "../../../public/pointer.jpeg",
                name: "Dollar Pointer WOW 10's Display Pack",
                price: "Rs. 400",
            },
            {
                _id: 29,
                image: "../../../public/notebook2.jpeg",
                name: "Cute Cartoon With Blue Hat Spiral Notebook",
                price: "Rs. 200",
            },
            {
                _id: 30,
                image: "../../../public/sharpener.jpeg",
                name: "Opal Pencil Sharpener Machine",
                price: "Rs. 250",
            },
        ]
    return NextResponse.json({message: "API Succesful",StationaryData}) 
}
