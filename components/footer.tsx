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
            <div className="w-full right-0 mx-auto px-4 py-8 pt-16 bg-zinc-800 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6 w-full flex px-8 flex-col items-center">
                        <h1 className="text-xl text-zinc-200 font-bold">VIKB.IO</h1>
                        <p className="text-md text-zinc-400 ">
                        Your gateway to unforgettable adventures and essential tips for working holidays around the globe
                        </p>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li key={idx} className="text-zinc-400 hover:text-zinc-500 hover:cursor-pointer duration-150">
                                        
                                            {item.name}
                                       
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t text-zinc-400 border-zinc-600 md:text-center">
                    <p>© 2022 Float UI Inc. All rights reserved.</p>
                </div>
            </div>
    )
}
export default Footer;