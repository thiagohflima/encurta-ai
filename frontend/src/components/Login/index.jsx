export const Login = ({ setLoggedIn }) => {
  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  return (
    <div className='box login'>
      <div className='input-container'>
        <input type='text' name='uname' placeholder='Username' required />
      </div>
      <div className='input-container'>
        <input type='password' name='pass' placeholder='Password' required />
      </div>
      <div className='button-container'>
        <input type='button' value='Login' onClick={handleLoginClick} />
      </div>
    </div>
  );
};
