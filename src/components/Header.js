import React ,{useState} from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';
import GistList from './GistList'

function Header() {
  const [searchText, setSearchText] = useState("")

   const inputHandler = (searchItem) =>{
    setSearchText(searchItem)
  }
   let display
  if(searchText){
    display =  <GistList username = {searchText} />
  }
  return (
    <>
    <Wrapper>
      <Octicon name="mark-github" mega/>
      <Search handler = {inputHandler} />
    </Wrapper>
   {display} 
  
     
    </>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header
