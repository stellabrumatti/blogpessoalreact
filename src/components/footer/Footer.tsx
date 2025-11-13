import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    const data = new Date().getFullYear()

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items items-center py-4">
                <p className="text-xl font-bold">
                    Blog Pessoal | Copyright: {data}
                </p>
            <p className="text-lg">Acesse nossas redes sociais</p>
            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/stellabrumattideoliveira/" target="_blank"></a>
                    <LinkedinLogoIcon size={48} weight="bold" />

                <a href="https://www.instagram.com/brumatti.stella/" target="_blank"></a>
                    <InstagramLogoIcon size={48} weight="bold" />

                <a href="https://www.facebook.com/stellabrumattideolivera" target="_blank"></a>
                    <FacebookLogoIcon size={48} weight="bold" />
            </div>
        </div>
        </div>

    
    </>
    
  )
}
export default Footer;