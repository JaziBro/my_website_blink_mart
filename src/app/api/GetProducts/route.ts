import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let productsData = [
        {
            _id: 1,
            image: "../../../public/wimpy_kid.jpeg",
            name: "Diary Of A Wimpy Kid: No Brainer by Jeff Kinney",
            price: "Rs. 350",
        },
        {
            _id: 2,
            image: "../../../public/silent_patient.jpeg",
            name: "Silent Patient by Alex Michaelides",
            price: "Rs. 500",
        },
        {
            _id: 3,
            image: "../../../public/laptop.jpeg",
            name: "HP 15S-FQ5000NIA Laptop - Intel Core i3-1215U, 4GB, 256GB SSD, Intel Graphics, 15.6 HD Display, Jet black ",
            price: "Rs. 80,000",
          
        },
        {
            _id: 4,
            image: "../../../public/smart_watch.jpeg",
            name: "T10 Ultra Smartwatch 2.09inch HD Big Screen Magnetic Wireless Charging Wacth 8 49mm Smart Watch ",
            price: "Rs. 5,000",
        },
        {
            _id: 5,
            image: "../../../public/frying_pan.jpeg",
            name: "Sonex Non Stick Fry Pan 22cm",
            price: "Rs. 1,000",
        },
        {
            _id: 6,
            image: "../../../public/milk_pan.jpeg",
            name: "Sonex Non Stick Classic Milk Pan",
            price: "Rs. 1,200",
        },
        {
            _id: 7,
            image: "../../../public/notebook.jpeg",
            name: "Subject Notebook ",
            price: " Rs. 300",
        },
        {
            _id: 8,
            image: "../../../public/pen_holder.jpeg",
            name: "Pen Stand Round Stand Round Jar - Stationary Holder",
            price: "Rs. 300",
        },
        {
            _id: 9,
            image: "../../../public/plants.jpeg",
            name: "Pack of 6 Mini Artificial Plant Decoration Piece with pot",
            price:' Rs. 300',
        },
        { 
            _id: 10,
            image: "../../../public/bedsheet.webp",
            name: "3 Piece Embroided Double Bedsheet Set",
            price: 'Rs. 1,200',
        }     
    ]
    // response 
    return NextResponse.json({message: "API Succesful", productsData}) 
} 