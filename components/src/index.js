import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Creating basic App Component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45 PM" 
                    imgAuthor={faker.image.avatar()} 
                    blogPost={faker.lorem.text()} />
            </ApprovalCard>
 
            <ApprovalCard>
                <CommentDetail 
                    author="Koustubh" 
                    timeAgo="Today at 2:00 AM" 
                    imgAuthor={faker.image.avatar()} 
                    blogPost={faker.lorem.text()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Richard" 
                    timeAgo="Yesterday at 4:45AM" 
                    imgAuthor={faker.image.avatar()} 
                    blogPost={faker.lorem.text()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Chahat" 
                    timeAgo="Yesterday at 3:35PM" 
                    imgAuthor={faker.image.avatar()} 
                    blogPost={faker.lorem.text()}/>
            </ApprovalCard>
        </div>

    );
};

ReactDom.render(<App />, document.querySelector('#root'));