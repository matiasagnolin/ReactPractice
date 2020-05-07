import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail imageSrc={faker.image.avatar()} 
                                author={faker.name.firstName()} 
                                date={faker.date.past()}
                                content={faker.lorem.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail imageSrc={faker.image.avatar()} 
                                author={faker.name.firstName()} 
                                date={faker.date.past()}
                                content={faker.lorem.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail imageSrc={faker.image.avatar()} 
                                author={faker.name.firstName()} 
                                date={faker.date.past()}
                                content={faker.lorem.words()}
                />
            </ApprovalCard>            
        </div>
        
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);