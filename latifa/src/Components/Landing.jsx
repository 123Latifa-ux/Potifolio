function Landing() { 
    return (
        <center>
            <div className="flex flex-row bg-black width-500px">
                
                <div className="w-[700px] flex flex-col justify-center">
                    <p className="text-3xl text-white font-serif italic">
                        I'M <span className="text-yellow-500">Latifa UWABERA</span>
                    </p>
                    <p className="text-3xl text-white font-serif mb-4">FULL STACK DEVELOPER</p>
                    
                    <p className="text-sm font-serif text-white flex flex-col space-y-4 ml-10">
                        Designing is a creative journey where ideas take visual form, blending art and function.
                        It transforms imagination into reality, making the world more aesthetic and efficient.
                    </p>
                </div>

                
                <div className="flex flex-col justify-center">
                    
                    <img 
                      src="true.png" 
                      className="rounded-2xl h-[400px] w-[380px]" 
                    />
                </div>
            </div>
        </center>
    );
}

export default Landing;





