import styled from "styled-components"
import { SimpleImg } from "react-simple-img"
import { space } from "../../../styles/vars"
import data from "../../../../config/translations/en.json"

export const StyleGalleryImageContainer = styled.div`
    height: 100%;
    width: 10000px;
`;

export const StyleGalleryImage = styled(SimpleImg)`
  img {
    margin: 0;
    padding: 0;
  }
`;

export const StyleHorizontalScrollChild = styled.div`
  height: 40%;
  margin: ${space.xl} 0 ${space.xl} 0;
  transform: rotate(90deg);
  transform-origin: right top;
  &:nth-child(1) {
    margin-top: 400px;
  }
  &:nth-child(${data.gallery.length}) {
    margin-bottom: 10px;
  }
`;