import { useDrag } from 'react-dnd';
import { StyledCard } from './Card.styles';

type CardProps = {
  item: {
    id: number;
    title: string;
    row: number;
  };
};

export const Card = (props: CardProps) => {
  const { item } = props;

  const [, drag] = useDrag(() => ({
    type: 'card',
    item: item,
    end(item, monitor) {
      console.log('Dropped!', item);
    },
  }));
  return <StyledCard ref={drag}>{item.title}</StyledCard>;
};
