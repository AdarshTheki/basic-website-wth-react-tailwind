import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome  } from 'react-icons/ai';
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io';

export const SidebarData = [
  {
    tittle: 'Home',
    path: '/',
    icons: <AiFillHome/>,
    cName: 'nav-text'
  },
  {
    tittle: 'Reports',
    path: '/reports',
    icons: <IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    tittle: 'Product',
    path: '/product',
    icons: <FaCartPlus/>,
    cName: 'nav-text'
  },
  {
    tittle: 'Team',
    path: '/team',
    icons: <IoMdPeople/>,
    cName: 'nav-text'
  },
  {
    tittle: 'Message',
    path: '/message',
    icons: <FaEnvelopeOpenText/>,
    cName: 'nav-text'
  },
  {
    tittle: 'Support',
    path: '/support',
    icons: <IoMdHelpCircle/>,
    cName: 'nav-text'
  },
]