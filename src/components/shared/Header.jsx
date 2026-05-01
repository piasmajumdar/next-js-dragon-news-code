import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <Image src={logo} height={300} width={200} alt='logo' className='mx-auto'/>
            <h2>Journalism Without Fear or Favour</h2>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;