import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard.';

function App() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <h1>Warning!</h1>
          <p>Are you sure you want to do this?</p>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                image={faker.image.image()} 
                author="Sam" 
                timeAgo="Today at 4:45pm"
                comment="Nice blog post!"
            />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            image={faker.image.image()} 
            author="Jane" timeAgo="Today at 2:04am" 
            comment="Smart thinking!"
            />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            image={faker.image.image()} 
            author="Max" 
            timeAgo="Yesterday at 6:33pm" 
            comment="Really enjoyed your post"
            />
        </ApprovalCard>
      </div>
    );
  };

ReactDOM.render(
    <App />,  
    document.querySelector('#root')
);