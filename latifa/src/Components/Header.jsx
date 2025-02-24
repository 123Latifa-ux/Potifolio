
function Header() {
    return (
        <header className="bg-gray-900 h-12 text-7x100 font-semibold text-gray-700" width="1000%" >
           
            <nav>
                <ul className="flex flex-row text-white items-center justify-center">
                    <li className="p-3 font-bold text-lg">My f<span className="text-yellow-600">o</span>lio <span className="text-yellow-600">.</span></li>
                    <li className="p-3"><span className="text-yellow-600" >Home</span></li>
                    <li className="p-3">About</li>
                    <li className="p-3">Services</li>
                    <li className="p-3">Portfolio</li>
                    <li className="p-3">Contact</li>
                </ul>
            </nav>
            
        </header>
    )
}
export default Header;

