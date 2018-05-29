import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  }

  removeCard = id => {
    const newArray = this.state.friends.filter(friend => {
      return friend.id !== id;
    });
    this.setState({
      friends: newArray
    });
  }

  render() {
    return (      
      <Wrapper>       
        <h1 className="title">Friends List</h1>
          {/* for loop for friends. friends is an array and friend is every single friend or pineapple in an array. */}                       
            {this.state.friends.map((friend) => {
                return <FriendCard
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        image={friend.image}
                        occupation={friend.occupation}
                        location={friend.location}
                        removeCard={this.removeCard}
                        />;
            })} 
      </Wrapper>
    );
  }
}

  


export default App;
