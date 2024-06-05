import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let furnitureData = [
            {
                _id: 10,
                image: "../../../public/bedsheet.webp",
                name: "3 Piece Embroided Double Bedsheet Set",
                price: "Rs. 1,200",
            },
            {
                _id: 17,
                image: "../../../public/bed.jpeg",
                name: "Habitt - Savior King Size Bed With Two Side Tables - Double Bed",
                price: "Rs. 50,000 ",
            },
            {
                _id: 18,
                image: "../../../public/study_table.jpeg",
                name: "Laptop Stand, Computer Stand with K-Shape Design Modern and Best suited for Online Work and Study",
                price: "Rs. 8,000",
            },
            {
                _id: 19,
                image: "../../../public/coffee_table.jpeg",
                name: "Modern Style Industrial Square Coffee Table ",
                price: "Rs. 11,000",
            },
            {
                _id: 20,
                image: "../../../public/sofa.jpeg",
                name: "3 Seater stylish Sofa Imported Fabric big size 3 free cusions ",
                price: "Rs. 20,000",
            },
        ]
    return NextResponse.json({message: "API Succesful", furnitureData}) 
}
