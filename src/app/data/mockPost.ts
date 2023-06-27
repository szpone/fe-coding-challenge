import placeholder from '../../../public/assets/images/blog-post-two.jpg';
import { DateTime } from 'luxon';


export type Post = {
    title: string,
    category: string,
    author: string,
    postPreview: string,
    postBody: string,
    date: any,
    image: string,
    id: number,
    subTitle: string
}

export const postMock = {
    title: 'Case study',
    category: 'news',
    author: 'user',
    postPreview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    postBody:`
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    `,
    image: placeholder.src,
    subTitle: 'About this event'
};

export const mockPostList = [1, 2, 3, 4, 5].map((num: number) => ({...postMock, id: num, date: DateTime.local(2023, num, 5)}))
