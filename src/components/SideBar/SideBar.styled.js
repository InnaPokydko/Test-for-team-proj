import styled from "@emotion/styled";
import { Row, Col, Container} from 'react-bootstrap';

export const ContainerWrap = styled(Container)`
display: flex;
gap: 50px;
flex-wrap: wrap;
    align-items: center; 
    width: 1100px;
    margin-left: 40px;
`
export const Text = styled.h1`
color:   #FFFFFF;`  

export const RowContainer = styled(Row)`
display: flex;
flex-wrap: wrap;
    align-items: center;      
`
export const ColCards = styled(Col)`
// .col-lg-1 {
//     flex: 0 0 50%;
//     max-width: 50%;


//      .col-md-2 {
//     flex: 0 0 33.33%;
//     max-width: 33.33%;
//   }

//   .col-sm-3 {
//     flex: 0 0 25%;
//     max-width: 25%;
//   }

//    .col-4 {
//     flex: 0 0 25%;
//     max-width: 25%;
  }`

export const StyledCard = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;`
       
    export const Imege = styled.img `
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    `
    export const Caption = styled.img `
    font-size: 1rem;
    text-align: center;
    color: #333;
    `
 
    export const ImgBox = styled.div`
        align-items: center;`
    
    