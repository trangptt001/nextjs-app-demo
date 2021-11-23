import Layout from 'components/layout';
import { getPosts } from 'lib/post';
import { Card } from 'react-bootstrap';
//@ts-ignore
export default function Post({posts}) {
    return (
        <Layout>
            <h1>Post page</h1>
            {posts.map((post: any) => (
                <Card key={post.id}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                </Card>
            ) )}
        </Layout>
    )
}

export const getStaticProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts
        }
    }
}