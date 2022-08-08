import PropTypes from 'prop-types';
import { ItemLi, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <ItemLi>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </ItemLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
