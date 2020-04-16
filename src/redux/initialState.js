import xbox from '../images/xbox.jpg';
import ps from '../images/ps.jpg';
import macbook from '../images/macbook.jpg';
import mouse from '../images/mouse.jpg';
import iphone11 from '../images/iphone11.jpg';
import ipad from '../images/ipad.jpg';
import headphones from '../images/headphones.jpg';
import fold from '../images/fold.jpg';
import nintendoswitch from '../images/switch.jpg';

export const initialState = {
  products: {
    data: [
      {
        id: '1',
        name: 'Xbox',
        image: xbox,
        availability: 'available',
        price: 200,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
        price: 200,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
        price: 1200,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
        price: 20,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
        price: 1000,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
        price: 400,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '7',
        name: 'Nintendo Switch',
        image: nintendoswitch,
        availability: 'available',
        price: 250,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem. Nam et pellentesque dui. Nunc facilisis porta leo, sit amet sollicitudin tellus. Ut bibendum scelerisque tortor, ut
        lacinia arcu dignissim eget. Vestibulum suscipit massa vitae enim porta elementum. Pellentesque non mi id arcu cursus posuere
        vel vitae erat.`,
      },
      {
        id: '8',
        name: 'Gaming Headphones',
        image: headphones,
        price: 50,
        availability: 'available',
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
        price: 2000,
        descriptionShort: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet sem nec turpis consectetur pellentesque non
        id sem.`,
        descriptionFull: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh id ex sollicitudin tincidunt. Vestibulum ante ipsum
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
