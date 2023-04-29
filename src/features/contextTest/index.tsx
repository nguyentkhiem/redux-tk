import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user';

export const ContextTest = () => {
  const { state, dispatch } = useContext(UserContext);

  const makeid = (length: Number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (Number(counter) < Number(length)) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    return result;
  };

  const handleAddUser = () => {
    const user = {
      id: Math.floor(Math.random() * 100) + 1,
      name: String(`name_${makeid(5)}`),
    };

    dispatch({
      type: 'CREATE_USER',
      payload: {
        userData: user,
      },
    });
  };

  const handleUpdateUser = (id: Number) => {
    const user = {
      id: id,
      name: String(`name_${makeid(5)}`),
    };

    dispatch({
      type: 'UPDATE_USER',
      payload: {
        id,
        userData: user,
      },
    });
  };

  const handleDeleteUser = (id: Number) => {
    dispatch({
      type: 'DELETE_USER',
      payload: {
        id,
      },
    });
  };

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <div>
      <h1>LIST USER</h1>
      <button onClick={handleAddUser}>ADD</button>
      <ul>
        {state?.users?.length ? (
          state?.users?.map((item: any) => (
            <li key={item.id}>
              <span>{`${item.id}: ${item.name}`}</span>
              <button onClick={() => handleUpdateUser(item.id)}>Update</button>
              <button onClick={() => handleDeleteUser(item.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>LIST EMPLTY</p>
        )}
      </ul>
    </div>
  );
};
