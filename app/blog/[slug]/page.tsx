async function getStaticPaths() {

}

export default function BlogArticle({ params }: { params: { slug: string } }) {
    return <h1>{params.slug}</h1>
}