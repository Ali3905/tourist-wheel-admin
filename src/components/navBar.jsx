import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaRegEnvelope, FaBell } from 'react-icons/fa'; // Importing the cart icon from react-icons/fa
import User from '../nextUiComponets/user';
import CommonButton from './commonButton';
import { useNavigate } from 'react-router-dom';
import { getUserAsync } from '../redux/authSlice';

// Styled components
const NavBarWrapper = styled.div`
  height: 70.5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
`;

const UserWrapper = styled.div`
  border-radius: 50px; /* Add your preferred border-radius */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 3px 10px 3px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartIconWrapper = styled.div`
  position: relative; 
  margin: 10px 15px 0px;
  background-color: #ffdcba;
  border-radius: 50%;
  width: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;

  &:after {
    content: "${props => props.totalQuantity}"; 
    position: absolute;
    top: -9px;
    right: -5px;
    background-color: ${props => props.totalQuantity ? 'gray' : 'transparent'}; 
    color: #ffffff; 
    font-size: 12px; 
    border-radius: 50%; 
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
  }
  
`;




// Functional component
function NavBar() {

  const user = useSelector(state => state.auth?.data)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserAsync())
  }, [])
  return (
    <NavBarWrapper>
      {
        user ? <UserWrapper>
          <User user={user} />
        </UserWrapper> : <CommonButton onClick={()=>navigate("/login")} type={"primary"}>Login</CommonButton>
      }
    </NavBarWrapper>
  );
}

export default NavBar;
