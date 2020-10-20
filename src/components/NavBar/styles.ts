import styled from 'styled-components';


export const Container = styled.nav`

  button{
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  /* opacity: 0; */
  visibility: hidden;

  @media (min-width: 600px) {
    visibility: visible;
    background: transparent;
    list-style-type: none;

    > ul { 
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 21px;
        list-style-type: none;

      > li {
        background: transparent;
        border: none;
        color: #000;
      }
      
    }

  }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    color: #000;
    font-size: 18px;
    transition: opacity 0.2s;
    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }
  .dropdown-root {
    z-index: 10;
    position: absolute;
  }
  .dropdown-arrow {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: #fff;
      top: -6.5px;
      left: -8px;
      border-radius: 4px 0 0 0;
      transform: rotate(45deg);
    }
  }
  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3),
      0 -18px 60px -10px rgba(0, 0, 0, 0.025);
    background: #fff;
    border-radius: 4px;
  }
  .dropdown-section {
    position: absolute;
  }
  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #f6f9fc;
    width: 100%;
  }
`;

export const Logo = styled.div`
img {
  max-height: 60px;
  max-width: 60px;
  padding-top: 14px;
  padding-left: 6px;
  float: left;
  z-index: 20;
}
`;

export const Nav = styled.nav`
    margin: 0; 
    list-style-type: none;


    a { 
      padding: 0 18px;
      margin: 0 -2px;
      text-decoration: none;
      display: inline-block;
      color: rgb(0, 0, 0);
      font-weight: 500;
      font-size: 15px;
      /* font-family: "Poppins", sans-serif; */
      text-transform: capitalize;
      outline: none; }

      .nav-menu a:last-child a {
        margin-right: 0;
        padding-right: 0; 
        }

    }

    ul {
   margin: 24px 0 0 26px;
   padding: 10px;
   box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
   list-style-type: none;

   /* background: rgb(0, 0, 0);  */
   
   li {
    list-style-type: none;

   
   .nav-menu ul li > a {
     padding: 10px;
     color: #333;
     transition: 0.3s;
     display: block;
     font-size: 12px;
     text-transform: none; 
     }

   }
`;
