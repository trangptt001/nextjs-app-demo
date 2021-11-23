import Head from "next/head";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
//@ts-ignore
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Next application write by me</title>
            </Head>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>My application</Navbar.Brand>
                        <Nav>
                            <Link href="/" passHref>
                                <Nav.Link>
                                    <a>Home</a>
                                </Nav.Link>
                            </Link>
                            <Link href="/post" passHref>
                                <Nav.Link>
                                    <a>Post</a>
                                </Nav.Link>
                            </Link>
                            <Link href="/about" passHref>
                                <Nav.Link>About</Nav.Link>
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container>{children}</Container>
            </main>
        </>
    );
}
