import xbox from '../images/xbox.jpg';
import ps from '../images/ps.jpg';
import macbook from '../images/macbook.jpg';
import mouse from '../images/mouse.jpg';
import iphone11 from '../images/iphone11.jpg';
import ipad from '../images/ipad.jpg';
import headphones from '../images/headphones.jpg';
import fold from '../images/fold.jpg';

export const initialState = {
  producta: {
    data: [
      {
        id: '1',
        name: 'Xbox',
        image: xbox,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '2',
        name: 'Play Station',
        image: ps,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '3',
        name: 'MacBook',
        image: macbook,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '4',
        name: 'Gaming Mouse',
        image: mouse,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '5',
        name: 'Iphone 11',
        image: iphone11,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '6',
        name: 'IPad',
        image: ipad,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '7',
        name: 'Gaming Mouse',
        image: mouse,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '8',
        name: 'Gaming Headphones',
        image: headphones,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '9',
        name: 'Samsung Fold',
        image: fold,
        availability: 'available',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
