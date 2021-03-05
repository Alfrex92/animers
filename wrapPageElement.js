import React from "react"
import { Layout } from "./src/components/layout"
import { navigate } from "gatsby"
import {useGetRedirectLanguage} from "./localeRedirect";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const WrapPageElement = ({ element, props }) => {
  console.log("WRAP PAGE: ", props.forcedLanguage)
  console.log(props)
  const urlLang = useGetRedirectLanguage();
  if (props.forcedLanguage !== undefined) {
    if (urlLang === "ja" && (!props.path.includes("ja"))) {
      navigate(`/${urlLang}${props.path}`, {replace: true})     
    }
  }


  return (
    <Layout {...props}>{element}</Layout>
    )
  }

export default WrapPageElement
