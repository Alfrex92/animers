import React from "react"
import { StyledCoCPageWrapper, StyledCoCPageWrapperInner } from "./styles"
import CoCContent from "../../organisms/CoCContent"
import MobilePageHeader from "../../molecules/MobilePageHeader";
import Footer from "../../organisms/Footer"
import DesktopNav from "../../organisms/DesktopNav";
import NextEventBanner from "../../molecules/NextEventBanner"

interface CoCPageInterface {
  disclaimer: string
  greeting: string
  introduction: IntroductionInterface[]
  sections: SectionInterface[]
  emailMessage: string
  emailAddress: string
  socialMessage: string
  copyrightContent: string
  mobileHeaderProps: MobilePageHeaderInterface
  desktopNavProps: DesktopNavInterface
  nextEventBannerProps: NextEventBannerInterface
}
interface IntroductionInterface {
  parID: string
  content: string
}

interface SectionInterface {
  sectionID: string
  sectionTitle: string
  subsections: SubsectionInterface[]
}

interface SubsectionInterface {
  subsectionID: string
  type: string
  content: string | null
  listItems: ListItemsInterface[] | null
}

interface ListItemsInterface {
  listItemID: string
  content: string
}

interface MobilePageHeaderInterface {
  pageTitle: string
}
interface DesktopNavInterface {
  languageOption: string,
  buttonProps: BasicButtonInterface,
  navMenuProps: NavMenuInterface,
  logoProps: LogoLinkInterface
}

interface BasicButtonInterface {
  children: any;
  buttonColor: string;
  hasBorder: boolean;
  textColor: string;
}

interface NavMenuInterface {
  links: LinkInterface[]
}

interface LinkInterface {
  title: string;
  id: string;
}

interface LogoLinkInterface {
  logoUrl: string,
}

interface NextEventBannerInterface {
  textContent: string;
  dateContent: string;
  buttonProps: BasicButtonInterface;
}

const CoCPage: React.FC<CoCPageInterface> = (props: CoCPageInterface) => {
  return (
    <StyledCoCPageWrapper>
      <NextEventBanner textContent={props.nextEventBannerProps.textContent} dateContent={props.nextEventBannerProps.dateContent} buttonProps={props.nextEventBannerProps.buttonProps}/>
        <DesktopNav languageOption={props.desktopNavProps.languageOption} navMenuProps={props.desktopNavProps.navMenuProps} logoProps={props.desktopNavProps.logoProps}
        buttonProps={props.desktopNavProps.buttonProps}
      />
      <StyledCoCPageWrapperInner>      
      <MobilePageHeader pageTitle={props.mobileHeaderProps.pageTitle}/>
      <CoCContent
        disclaimer={props.disclaimer}
        greeting={props.greeting}
        introduction={props.introduction}
        sections={props.sections}
      />
      <Footer
        emailMessage={props.emailMessage}
        emailAddress={props.emailAddress}
        socialMessage={props.socialMessage}
        copyrightContent={props.copyrightContent}
      />
      </StyledCoCPageWrapperInner>
    </StyledCoCPageWrapper>
  )
}

export default CoCPage
