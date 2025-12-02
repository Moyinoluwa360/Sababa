import styled from "styled-components"
import { Link } from "react-router-dom"

function MenOrWomen({setGenderFilter}) {
  return (
    <ImgContainer>
        <Link className="link" to={"/home/alloutfits/male"}>
            <img src="/menSection.svg" alt="click to exlore the mens section"/>
            <span>Men</span>
        </Link>
        <Link className="link" to={"/home/alloutfits/female"}>
            <img src="/womenSection.svg" alt="click to exlore the womens section" onClick={()=> setGenderFilter("female")} />
            <span id="women">Women</span>
        </Link>
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px){
        flex-direction: column;
    }
    img{
        width: 100%;
    }
    span{
        position: absolute;
        top: 50%;
        z-index: 1000;
        color: white;
        left: 45%;
        font-size: 20px;
        @media (max-width: 480px){
            font-size: 16px;
        }
    }
    #women{
        right: 25%;
        @media (max-width: 1000px){
           right: 45%;
        }
    }
    .link{
        flex: 1;
        text-align: center;
        text-decoration: none;
        position: relative;
        width: 50%;
        @media (max-width: 1000px){
            width: 100%;
        }

    }
`

export default MenOrWomen
