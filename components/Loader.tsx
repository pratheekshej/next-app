import Image from "next/image";
import LoaderSVG from "../public/assets/icons/loader.svg"

const ComponentLoader = () => {
    return (
        <div className='w-full h-40 flex-center'>
            <Image
                src={LoaderSVG}
                width={50}
                height={50}
                alt='loader'
                className='object-contain'
            />
        </div>
    );
};

export default ComponentLoader;