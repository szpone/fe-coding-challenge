import React from 'react';
import styles from './blog.module.css'
import Pill from '../pill/pill';
import BlogImage from './image';

const PostPreview = () => {
    return (
        <div className={styles.preview}>
            <BlogImage />

            <h2 className={styles.title}>Case study</h2>
            <div className={styles.pillContainer}> 
                <Pill text="topic" />
                <Pill text="user" />
                <Pill text="123456 80193" />
            </div>
            <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
            
            </div>

        </div>
    )
};

export default PostPreview