import React from "react"
import { Layout } from "./src/components/layout"
import { navigate } from "gatsby"
import {useGetRedirectLanguage} from "./localeRedirect";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const WrapPageElement = ({ element, props }) => {
  const urlLang = useGetRedirectLanguage();
    if (urlLang === "ja" && (!props.path.includes("ja"))) {
      navigate(`/${urlLang}${props.path}`, {replace: true})      
    }

  return (
    <Layout {...props}>{element}</Layout>
    )
  }

export default WrapPageElement
