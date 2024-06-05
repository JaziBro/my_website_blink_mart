import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let electronicsData = [
        {
            _id: 3,
            image: "../../../public/laptop.jpeg",
            name: "HP 15S-FQ5000NIA Laptop - Intel Core i3-1215U, 4GB, 256GB SSD, Intel Graphics, 15.6 HD Display, Jet black ",
            price: "Rs. 80,000",
        },
        {
            _id: 4,
            image: "../../../public/smart_watch2.webp",
            name: "T10 Ultra Smartwatch 2.09inch HD Big Screen Magnetic Wireless Charging Wacth 8 49mm Smart Watch",
            price: "Rs. 5,000",
        },
        {
            _id: 14,
            image: "../../../public/toaster.jpeg",
            name: "4 Slice Pop-Up Toaster WF-2528",
            price: "Rs, 8,000",
        },
        {
            _id: 15,
            image: "../../../public/fridge.jpeg",
            name: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA (Digital Control Panel+Turbo Fan+4 Temperature Sensors+ABT Technology+Inverter Compressor+Glass Door) Black Colour Refrigerator",
            price: "rs. 50,000",
        },
        {
            _id: 16,
            image: "../../../public/air_fryer.jpg",
            name: "Air Fryer 5l digital touch display air fryer uk brand",
            price: "Rs. 18,000",
        },
    ]
    return NextResponse.json({message: "API Succesful", electronicsData}) 
}
