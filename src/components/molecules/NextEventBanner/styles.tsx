import styled from "styled-components"
import {colors, space, fweight, fsize} from "../../../styles/vars"


export const StyleBannerWrapper = styled.div `
    align-content: center;
    align-items: center;
    background-color: ${colors.red.normal};
    color: ${colors.white.normal};
    display: flex;
    justify-content: center;
    min-height: 60px;
    text-align: center;
`;

export const StyleBannerNotification = styled.span `
    font-size: ${fsize.normal};
    font-weight: ${fweight.w5};
    margin: 0 ${space.s};
`;

export const StyleBannerDate = styled.span `
    margin: 0 ${space.s};
`;