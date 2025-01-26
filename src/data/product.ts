import mcproImg from '@/assets/img/mcpro.jpeg';
import levonoImg from '@/assets/img/levono.png';
import riderImg from '@/assets/img/rider.png';
import ldlcImg from '@/assets/img/ldlc.png';
import asusImg from '@/assets/img/asus.png';
import rogImg from '@/assets/img/rog.png';
import msiImg from '@/assets/img/msi.png';
import padImg from '@/assets/img/pad.png';
import type { ProductInterface } from '@/interfaces';

export default [
  {
    id: 1,
    image: mcproImg,
    title: 'Macbook Pro',
    description: 'Power and elegance.',
    price: 1500,
    category: 'desktop',
  },
  {
    id: 2,
    image: levonoImg,
    title: 'Levono Pro',
    description: 'Performance for professionals.',
    price: 2300,
    category: 'desktop'
  },
  {
    id: 3,
    image: riderImg,
    title: 'Rider',
    description: 'Light and fast.',
    price: 1200,
    category: 'gamer'
  },
  {
    id: 4,
    image: ldlcImg,
    title: 'LDLC Benolo',
    description: 'Built to last.',
    price: 4500,
    category: 'streaming'
  },
  {
    id: 5,
    image: asusImg,
    title: 'Asus Gamer',
    description: 'Designed for gamers.',
    price: 3755,
    category: 'gamer'
  },
  {
    id: 6,
    image: rogImg,
    title: 'Rog Desktop',
    description: 'A battle station.',
    price: 2452,
    category: 'streaming'
  },
  {
    id: 7,
    image: msiImg,
    title: 'MSI Play',
    description: 'Powerful and versatile.',
    price: 1478,
    category: 'gamer'
  },
  {
    id: 8,
    image: padImg,
    title: 'ThinkPad',
    description: 'Reliable everyday.',
    price: 899,
    category: 'desktop'
  },
] as ProductInterface[]
