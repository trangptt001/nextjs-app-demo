import Button from '@restart/ui/esm/Button';
import Layout from 'components/layout';
import { getPosts } from 'lib/post';
import { Card } from 'react-bootstrap';
import Link from 'next/link'
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
                        <Link href={`/post/${post.id}`} passHref>
                            <Card.Link>See more</Card.Link>
                        </Link>
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