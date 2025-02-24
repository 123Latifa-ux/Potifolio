
function More() {
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center py-7 px-2 relative">
            <h1 className="absolute right-4 bottom-1/2 rotate-90 text-gray-800 text-xl font-semibold tracking-widest">
                SERVICES
            </h1>

            <div className="flex justify-center space-x-6 max-w-4xl mx-auto">
                <div className="bg-gray-950 p-6 w-65 h-60 flex flex-col items-center rounded-2xl shadow-lg">
                    <img src="one.jpg" alt="One" className="w-12 h-12 mb-4" />
                    <p className="text-lg font-semibold">Our Design</p>
                    <p className="text-sm text-gray-400 text-center mt-2">
                        We help e-commerce brands navigate the changing landscape of digital marketing.
                    </p>
                </div>
                <div className="bg-gray-950 p-6 w-65 h-60 flex flex-col items-center rounded-2xl shadow-lg">
                    <img src="six.png" alt="Two" className="w-12 h-12 mb-4" />
                    <p className="text-lg font-semibold">Social Media</p>
                    <p className="text-sm text-gray-400 text-center mt-2">
                        We ensure consistency, readability, and aesthetics across platforms to attract and retain audiences.
                    </p>
                </div>
                <div className="bg-gray-950 p-6 w-65 h-60 flex flex-col items-center rounded-2xl shadow-lg">
                    <img src="seven.png" alt="Three" className="w-12 h-12 mb-4" />
                    <p className="text-lg font-semibold">Graphic Design</p>
                    <p className="text-sm text-gray-400 text-center mt-2">
                        We create effective graphic design by focusing on clarity, simplicity, and alignment to communicate the message visually.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default More;

  





