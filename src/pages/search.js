import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import Search from "../components/Search"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const SearchPage = props => {
  return (
    <Layout>
      <SEO
        title="Pesquisar"
        description="Faça sua busca e encontre artigos ou posts dentro do blog."
      />
      <Search algolia={algolia} />{" "}
    </Layout>
  )
}

export default SearchPage
