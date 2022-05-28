export const Table = ({ setLoggedIn }) => {
  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <div className='logout'>
        <input type='button' value='Logout' onClick={handleLogoutClick} />
      </div>

      <div className='box table'>
        <div>Oioioi</div>
      </div>
    </>
  );
};
