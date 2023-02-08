import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phoneBookSlice';
import { ContactList, ItemsContact, DeleteBtn } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectFilter);

  const getVisibleContact = () => {
    const normalizeFilter = query.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <ContactList>
      {visibleContact.map(({ id, name, number }) => (
        <ItemsContact key={id}>
          {name}: {number}{' '}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact({ id }))}
          >
            delete
          </DeleteBtn>
        </ItemsContact>
      ))}
    </ContactList>
  );
};
