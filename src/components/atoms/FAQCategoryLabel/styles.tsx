import styled from "styled-components"
import { colors, fweight, fsize } from "../../../styles/vars"

export const StyleFAQCategoryLabelContainer = styled.div`
    text-align: center;
`;

export const StyleFAQCategoryLabel = styled.p`
    color: ${colors.gray.darker};
    font-size: ${fsize.bigger};
    font-weight: ${fweight.w6};
`;