import React from "react";
import Image from "next/image";

const Featured =() =>{
    return(
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Shop By category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of products across different categories to find exactly what you&apos;re looking for.</p>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title:"Electronics",
                            image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
                            icons:"fas fa-laptop"
                        },
                        {
                            title:"Electronics",
                            image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
                            icons:"fas fa-laptop"
                        },
                        {
                            title:"Electronics",
                            image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
                            icons:"fas fa-laptop"
                        },
                        {
                            title:"Electronics",
                            image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
                            icons:"fas fa-laptop"
                        },
                    ].map((category,index)=>(
                        <div
                        key={index}
                        className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"> 
                            </div>
                            <div className="absolute inset-0 bg-indigo-600/0 group:hover:bg-indigo-600/20 transition-all duration-300 z-10">
                            </div>
                            <Image src={category.image} alt={category.title}></Image>
                            
                        </div>
                    ))
                    }
                </div>
                </div> 

        </section>
    )
}

export default Featured