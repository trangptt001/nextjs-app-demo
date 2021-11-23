import Layout from 'components/layout';
import { getPostById, getPostIds } from 'lib/post';
import { Card, Button} from 'react-bootstrap';
import Link from 'next/link'
//@ts-ignore
function PostDetail ({post}) {
    return (
        <>
            <Layout>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Link href='/post' passHref>
                            <Button>Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Layout>
        </>
    )
}
export const getStaticPaths = async () => {
    const paths = await getPostIds();

    return {
        paths,
        fallback: false // any post not instance return 404 page
    }
}

//@ts-ignore
export const getStaticProps = async ({params})  => {
    const post = await getPostById(params.id);

    return {
        props: {
            post
        }
    }
}
export default PostDetail;