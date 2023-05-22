import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {

       return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <p className='font-extrabold text-lg'>Tax<span className='text-blue-700'>Pal</span></p>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
                    <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-2xl cursor-pointer">
                    <a className="text-gray-500 ">
                        <AiOutlineTwitter />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <FaFacebookF />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <AiOutlineInstagram />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <FaLinkedinIn />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer