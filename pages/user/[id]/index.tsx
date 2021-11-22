/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
export default function UserDetailPage (){

    const router = useRouter();

    return (
        <>
            <h1>User detail page {router.query.id}</h1>
            <img src='/assets/image1.jpg' alt="image" height={400} width={600}/>
        </>
    )
}