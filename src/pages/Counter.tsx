import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { decrement, increment } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeContainer = styled.div`
  ${tw`
    bg-black
    w-screen
    h-screen
    
    `}
`;

const Count = styled.div`
  ${tw`
    text-white
    flex
    items-center
    justify-center
    font-bold
    text-7xl
    
    `}
`;

const ButtonContainer = styled.div`
  ${tw`
  flex
  items-center
  justify-center
    
    `}
`;


const Button = styled.div`
  ${tw`
    bg-blue-500
    w-40
    h-10
    text-4xl
    flex
    font-extrabold
    pb-2
    items-center
    justify-center
    rounded-xl
    
    
    `}
`;




export default function Counter() {
  const count = useSelector((state:any) => state.counter.count)
  const dispatch = useDispatch()

    return(
      <HomeContainer>
        <Count>
          {count}
        </Count>
        <ButtonContainer>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button onClick={() => dispatch(increment())}>+</Button>
        </ButtonContainer>
      </HomeContainer>
    )
}
