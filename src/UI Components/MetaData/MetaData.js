import { Helmet} from 'react-helmet-async';

const MetaData = (props) => {
    return (
        <Helmet prioritizeSeoTags>
            <meta charSet="utf-8" />
            <meta name="description" content="This E-Commerce Portfolio application is made by https://mydesign.my.id/" />
            <title itemProp="name" lang="en">Adidas | {props.title}</title>
            <link rel="canonical" href="https://mydesign.my.id/" />
        </Helmet>
    )
}

export default MetaData