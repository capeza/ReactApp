import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCouner from "./components/ClassCouner";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])


    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название поста"/>
                <input type="text" placeholder="Описание поста"/>
                <MyButton>Создать пост</MyButton>

            </form>
            <PostList posts={posts} title="Посты про JS"/>
        </div>
    );
}

export default App;
