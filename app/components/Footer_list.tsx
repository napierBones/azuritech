import React from 'react';
interface ListItem {
    content: string;
  }
const Footer_list = ({list}: {list: ListItem[]}) => {
  return (
    <ul>
     {list.map((item, index) => <li key={index} className='opacity-50 text-sm'>{item.content}</li>) }
    </ul>
  );
};

export default Footer_list;
