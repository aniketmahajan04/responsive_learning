import { useEffect, useRef, useState } from "react";


const testimonials = [
  { id: 1, name: "John Doe", text: "This service is amazing! Highly recommended." },
  { id: 2, name: "Jane Smith", text: "I've never been happier with a product. Five stars!" },
  { id: 3, name: "Mike Johnson", text: "The best experience I've ever had. Thank you!" },
];

export const MyTestimonial = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const timeOutRef = useRef<number | null>(null);


    // function nextTestimonial(){
    //     setTimeout(() => {setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}, 2000)
        
    // }
    // function prevTestimonial(){
    //     setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length )
    // }

    useEffect(() => {
        timeOutRef.current = setTimeout(() => {
            setCurrentTestimonial((currentTestimonial) => currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
        }, 1500)

        return () => {
            if(timeOutRef.current){
                clearTimeout(timeOutRef.current);
            }
        }
    }, [currentTestimonial])

    function pauseAutoSliding() {
        if(timeOutRef.current) clearTimeout(timeOutRef.current);
    }

    function resumeAutoSliding() {
        timeOutRef.current = setTimeout(() => {
            setCurrentTestimonial((currentTestimonial) => currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)
        }, 1500)
    }


    return (
       <div className="mx-auto flex flex-col bg-blue-900 p-6 max-w-md gap-4 rounded-md transition-opacity duration-500"
        onMouseEnter={pauseAutoSliding}
        onMouseLeave={resumeAutoSliding}>
            <p className="text-center text-white text-lg">{testimonials[currentTestimonial].text}</p>
            <h3 className="text-center font-bold text-white">{testimonials[currentTestimonial].name}</h3>
            <div className=" flex justify-between mt-6">
                {/* <button className="bg-white py-2 px-4 rounded-md text-blue-900"
                 onClick={prevTestimonial}>Prev</button>
                <button className="bg-white py-2 px-4 rounded-md text-blue-900" 
                onClick={nextTestimonial}>Next</button> */}
            </div>
       </div>
       
    )
}