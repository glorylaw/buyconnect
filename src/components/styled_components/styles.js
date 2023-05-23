import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    height: 3.75rem;
    width: 100%;
    ${mobile({ height: '3.0rem' })}
    // background-color: #000;
`
export const Wrapper = styled.div`
    padding: 0.7rem 1.4rem;
    display: flex;
    align-items: center
    justify-content: space-between;
    ${mobile({ padding: '0.5rem 1.0rem' })}
`

export const Language = styled.span`
    font-size: 1.1rem;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Center = styled.div`
    flex: 1;
    text-align: center;
`
export const Logo = styled.h1`
  font-weight: 300;
  font-size: 1.5rem;
  ${mobile({ fontSize: '1.5rem' })}
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}

`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 15.625rem;
  ${mobile({ width: '50px' })}
`;

/* announcements styles */
export const AnnouncementContainer = styled.div`
    height: 2.8rem;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 500;
    position: relative;
`;
/* Slider styles */
export const SliderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 2rem;
    ${mobile({ display: 'none' })}
    // background-color: coral;
`;
export const Arrow = styled.div`
    width: 50px;
    
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
export const SliderWrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;
export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
export const Image = styled.img`
    height: 80%;
`
export const Title = styled.h1`
    font-size: 70px;

`;
export const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-radius: 0.5rem;
    // background-color: gray;
    cursor: pointer;
    // border: none;
    
`;

export const CategoryContainer = styled.div`
    display: flex;
    padding: 1.3rem;
    justify-content: space-between;
    ${mobile({ padding: '0.5rem 1.0rem', flexDirection: 'column' })}
`;

export const CategoryInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.5);
`;

export const CategoryTitle = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`

export const CategoryDiv = styled.div`
    flex: 1;
    margin: 0.2rem;
    height: 70vh;
    position: relative;
`;
export const ButtonCategory = styled.button`
    border: none;
    border-radius: 0.3rem;
    background-color: #fff;
    cursor: pointer;
    padding: 10px;
    margin: 0.5rem;
    font-size: 20px;
    color: gray;
    font-weight: 500;
    &:hover {
        color: #000;
    }
`;

export const CategoryImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: '20vh' })}
`
