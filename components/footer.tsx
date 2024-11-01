const Footer = () => {

    const footerNavs = [
        {
            href: '',
            name: 'Terms'
        },
        {
            href: '',
            name: 'License'
        },
        {
            href: '',
            name: 'Privacy'
        },
        {
            href: '',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10 w-full relative">
            <div className="w-[90%] absolute right-0 mx-auto px-4 py-8 text-zinc-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <h1 className="text-xl font-bold">VIKB.IO</h1>
                        <p className="max-w-md">
                        Your gateway to unforgettable adventures and essential tips for working holidays around the globe
                        </p>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                                        
                                            {item.name}
                                       
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>© 2022 Float UI Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;