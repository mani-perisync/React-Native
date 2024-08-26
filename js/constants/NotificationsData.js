import { creditCardImg, locationImg, percentageLogoImg } from "./links";


export const NotificationsData = [
    {
      day:'Today',
      status: 'Your offer has been accepted!',
      id: 0,
      comments: 'Congrates! your offer has been accepted by the seller for $170,000',
      img:percentageLogoImg,
      value:true,
      check:true,
    },
    {
      day:'Yesterday',
      status: 'New Services Available!',
      id: 1,
      comments: 'Now you can track orders in real time',
      img:locationImg,
      value:true,
      check:false,
    },
    {
      status: 'Your offer has been rejected!',
      id: 2,
      comments: "We're sorry, your offer has been rejected by the seller",
      img:percentageLogoImg,
      value:false,
      check:true,
    },
    {
      status: 'Credit Card Connected!',
      id: 3,
      comments: 'Credit Card has been linked',
      img:creditCardImg,
      value:false,
      check:false,
    },
    {
      day:'December 22, 2024',
      status: 'Account Setup Successful!',
      id: 4,
      comments: 'Account has been setup successfully',
      img:locationImg,
      value:true,
      check:false,
    },
    {
      day:'December 22, 2024',
      status: 'Account Setup Successful!',
      id: 5,
      comments: 'Account has been setup successfully',
      img:locationImg,
      value:true,
      check:false,
    },
  ];