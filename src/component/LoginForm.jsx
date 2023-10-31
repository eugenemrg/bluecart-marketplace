import React,{useState} from 'react'

function LoginForm({onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleForm = () => {
      setIsOpen(!isOpen);
      if (onClose) {
        onClose();
      }
    };
  
  return (
    <div className={`form form2 ${isOpen ? 'open' : 'closed'}`}>
        <form action="">
            <h3>Blue MarketPlace</h3>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <p><span>Forgot password </span>I do not have an account? <span>Signup</span></p>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginForm