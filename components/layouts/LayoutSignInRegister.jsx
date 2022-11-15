import Image from "next/image";

const SignInRegister = ({children}) => {
    return (
        <>
            <main>
                <section className="flex min-h-screen bg-lime-100 py-32">
                    {/* <div className="max-w-6xl w-full mx-3 lg:mx-auto my-auto h-3/5 grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden"> */}
                    <div className="max-w-6xl w-full mx-3 lg:mx-auto grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden border border-gray-200 bg-white md:p-2">
                        <div className="hidden md:block bg-blue-600 relative rounded-lg overflow-hidden">
                            <Image 
                                src="/921499.jpg"
                                fill
                                alt="Background Image"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-center px-6 lg:px-28">
                            {children}
                        </div>
                    </div>
                </section>
                
                {/* <section className="h-screen flex flex-col place-content-center">
                    <div className="h-4/6 grid grid-cols-[1fr] lg:grid-cols-4 lg:grid-rows-[80%] gap-6 center justify-center lg:px-20">
                        {   [1,2,3,4].map(i =>
                            <figure className="">
                                <div className="relative h-3/4 rounded-t-lg overflow-hidden">
                                    <Image 
                                        src="/921499.jpg"
                                        alt="Image One"
                                        fill
                                    />
                                </div>
                                <figcaption className="h-1/4 border p-3">
                                    <h1>Title of Image {i}</h1>
                                    <p>Description of Image {i} Description of Image Description of Image Description of Image</p>
                                </figcaption>
                            </figure>
                        )}
                    </div>
                </section>  */}

                
            </main>
        </>
    )
}
export default SignInRegister;