import styled from "styled-components"
import { SimpleImg } from "react-simple-img"
import { space } from "../../../styles/vars"
import data from "../../../../config/translations/en.json"

export const StyleGalleryImageContainer = styled.div`
    height: 100%;
    width: 10000px;
`;

export const StyleGalleryImage = styled.img`
    position: absolute;
    left: -10000%;
    right: -10000%;
    top: -10000%;
    bottom: -10000%;
    margin: auto auto;
    min-width: 1000%;
    min-height: 1000%;
    -webkit-transform: scale(.1);
    transform: scale(.08);
    -o-object-fit: cover;
    object-fit: contain;
`;

export const StyleHorizontalScrollChild = styled.div`
  height: 50%;
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