// assets
import { IconCreditCard } from '@tabler/icons';

// constant
const icons = {
  IconCreditCard,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'View',
  type: 'group',
  children: [
    {
      id: 'payment-history',
      title: 'Payment History',
      type: 'item',
      url: '/payment-history',
      icon: icons.IconCreditCard,
    }
  ],
};

export default pages;
