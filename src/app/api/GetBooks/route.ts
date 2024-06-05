import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    let booksData = 
        [
            {
                _id: 2,
                image: "../../../public/silent_patient.jpeg",
                name: "Silent Patient by Alex Michaelides",
                price: "Rs. 500",
            },
            {
                _id: 1,
                image: "../../../public/wimpy_kid.jpeg",
                name: "Diary Of A Wimpy Kid: No Brainer by Jeff Kinney",
                price: "Rs. 350",
            },
            {
                _id: 11,
                image: "../../../public/book_thief.jpeg",
                name: " The Book Thief by Marcus Zusak",
                price: "Rs. 1,000",
            },
            {
                _id: 12,
                image: "../../../public/deepend.jpeg",
                name: "Diary Of A Wimpy Kid: Deep End by Jeff Kinney",
                price: "Rs. 300",
            },
            {
                _id: 13,
                image: "../../../public/harrypotter.jpg",
                name: "Harry Potter And The Philosopher's Stone by J.K.Rowling",
                price: "Rs. 1,000",
            },
        ]
    return (
         NextResponse.json({message: "API Succesful", booksData}) 
        )
}
